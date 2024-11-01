import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './models/product.model';
import { CreateProductRequest } from './interfaces';
import { UploadService } from '../upload';

@Injectable()
export class ProductService {
  // getAllProductsByCategory(categoryId: number): import("./models").Product[] | PromiseLike<import("./models").Product[]> {
  //     throw new Error('Method not implemented.');
  // }
  #_uploadService: UploadService;

  constructor(
    @InjectModel(Product) private productModel: typeof Product,
    upload: UploadService,
  ) {
    this.#_uploadService = upload;
  }

  /**
   * Barcha mahsulotlarni olish
   */
  async getAllProducts(): Promise<Product[]> {
    return await this.productModel.findAll();
  }

  /**
   * Yangi mahsulot yaratish
  //  * @param payload - Yaratish uchun kerakli ma'lumotlar
   */
  async createProduct(payload: CreateProductRequest): Promise<any> {
    // Faylni yuklash
    const fileOptions = await this.#_uploadService.uploadFile({
      file: payload.image,
      bucket: 'uploads/products',
    });
    console.log(fileOptions)

    // Mahsulotni yaratish
  const newProduct =  await this.productModel.create({
      name: payload.name,
      image: fileOptions.imageUrl,
    });
    return newProduct
  }

  async updateProduct(id: number,updatedPayload: CreateProductRequest): Promise<any>{
    const product = await this.productModel.findByPk(id)
    if(!product){
      return "Product not found"
    }
    if(updatedPayload.image){
      if(product.image){
        await this.#_uploadService.removeFile({fileName: product.image})
      }
    }
    const updatedImage = await this.#_uploadService.uploadFile({
      file: updatedPayload.image,
      bucket: 'uploads/products'
    })
    const newProduct = product.update({
      name: updatedPayload.name,
      image: updatedImage.imageUrl
    })
    return {
      message: "Product updated successfully!",
      data: newProduct
    }
  }

  /**
   * Mahsulotni o'chirish
   * @param id - O'chiriladigan mahsulot ID si
   */
  async deleteProduct(id: number): Promise<any> {
    const foundedProduct = await this.productModel.findByPk(id);

    if (!foundedProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    // Faylni o'chirish
    await this.#_uploadService.removeFile({ fileName: foundedProduct.image });

    // Mahsulotni bazadan o'chirish
    return await this.productModel.destroy({ where: { id } });
  }
}

