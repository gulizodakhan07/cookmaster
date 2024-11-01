import {IsString} from 'class-validator'
import { CreateCategoryRequest } from "../interfaces/category.interface";

export class CreateCategoryDto implements Omit<CreateCategoryRequest,'image'>{
    @IsString()
    name: string

    @IsString()
    description: string;

    image: any


}