import { Product } from './models/product.model';
import { ProductService } from './product.service';
import { CreateProductDto } from './dtos/create-product.dtos';
import { UpdateCategoryDto } from '../categories/dtos/update-category.dtos';
export declare class ProductController {
    #private;
    constructor(service: ProductService);
    getAllProducts(): Promise<Product[]>;
    createProduct(createProductPayload: CreateProductDto, image: Express.Multer.File): Promise<Product>;
    updateProduct(id: number, payload: UpdateCategoryDto, image: Express.Multer.File): Promise<Product>;
    deleteProduct(productId: number): Promise<Product>;
}
