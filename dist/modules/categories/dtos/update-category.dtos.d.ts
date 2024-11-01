import { CreateCategoryRequest } from "../interfaces/category.interface";
export declare class UpdateCategoryDto implements Omit<CreateCategoryRequest, 'image'> {
    name: string;
    image: any;
}
