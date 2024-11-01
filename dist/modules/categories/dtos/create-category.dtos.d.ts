import { CreateCategoryRequest } from "../interfaces/category.interface";
export declare class CreateCategoryDto implements Omit<CreateCategoryRequest, 'image'> {
    name: string;
    description: string;
    image: any;
}
