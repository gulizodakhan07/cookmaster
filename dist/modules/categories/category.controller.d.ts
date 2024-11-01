import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dtos';
import { Category } from './models';
import { UpdateCategoryDto } from './dtos/update-category.dtos';
export declare class CategoryController {
    private readonly service;
    constructor(service: CategoryService);
    createCategory(payload: CreateCategoryDto, video: Express.Multer.File): Promise<Category>;
    allCategories(): Promise<Category>;
    singleCategory(id: string): Promise<Category | "Bunday category mavjud emas">;
    updateCategory(id: number, updatedPayload: UpdateCategoryDto): Promise<[affectedCount: number]>;
    deleteCategory(id: number): Promise<" Category not found!" | {
        message: string;
        statusCode: number;
        categoryId: number;
    }>;
}
