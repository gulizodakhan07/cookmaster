
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as fs from 'fs'
import { Category } from './models';
import { CreateCategoryRequest } from './interfaces/category.interface';
import { UpdateCategoryDto } from './dtos/update-category.dtos';
import * as path from 'path';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category) private readonly categoryModel: typeof Category) { }

  async createCategory(payload: CreateCategoryRequest): Promise<Category> {
    try {
      // console.log(payload.name, payload.image)
      return await this.categoryModel.create({
        name: payload.name,
        image: payload.image,
      });

    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException(error)

    }
  }

  async getAllCategories(): Promise<any>{
    try {
      return await this.categoryModel.findAll()
      
    } catch (error) {
      throw new InternalServerErrorException(error)
      
    }
  }
  async categoryById(id: number){
    try {
      const category = await this.categoryModel.findByPk(id)
      if(!category){
        return 'Bunday category mavjud emas'
      }
      return category
      
    } catch (error) {
      throw new InternalServerErrorException(error)
      
    }

  }


  async updateCategory(id: number,payload: UpdateCategoryDto){
    const category = await this.categoryModel.findByPk(id)
    const filePath = path.join(__dirname,"../../uploads",category.image)
    console.log(filePath)
    if(fs.existsSync(filePath)){
      fs.unlinkSync(filePath)
    }
    return await this.categoryModel.update({
      name: payload.name || category.name,
      image: payload.image || category.image

    },{
      where:{id}
    })
    }


    async deleteCategory(id: number){
      try {
        const category = await this.categoryModel.findByPk(id)
        if(!category){
          return ' Category not found!'
        }
        const deletedPath =path.join(__dirname,"../../uploads",category.image)
        if(category.image){
          fs.unlinkSync(deletedPath)
        }
        await this.categoryModel.destroy()
        return {
          message: 'Category deleted successfully',
          statusCode: 200,
          categoryId: category.id
        }
        
      } catch (error) {
        throw new InternalServerErrorException(error)
        
      }
    }
}
