import {IsOptional, IsString} from 'class-validator'
import { CreateCategoryRequest } from "../interfaces/category.interface";

export class UpdateCategoryDto implements Omit<CreateCategoryRequest,'image'>{
    @IsString()
    @IsOptional()
    name: string


    image: any


}