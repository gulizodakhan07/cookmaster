import { Category } from './models';
import { CreateCategoryRequest } from './interfaces/category.interface';
import { UpdateCategoryDto } from './dtos/update-category.dtos';
export declare class CategoryService {
    private readonly categoryModel;
    constructor(categoryModel: typeof Category);
    createCategory(payload: CreateCategoryRequest): Promise<Category>;
    getAllCategories(): Promise<any>;
    categoryById(id: number): Promise<Category | "Bunday category mavjud emas">;
    updateCategory(id: number, payload: UpdateCategoryDto): Promise<[affectedCount: number]>;
    deleteCategory(id: number): Promise<" Category not found!" | {
        message: string;
        statusCode: number;
        categoryId: number;
    }>;
}
