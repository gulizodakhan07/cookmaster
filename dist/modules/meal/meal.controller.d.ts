import { MealService } from './meal.service';
import { Meal } from './model/meal.model';
import { CreateMealDto, UpdateMealDto } from './dtos';
export declare class MealController {
    #private;
    constructor(service: MealService);
    getAllMeal(): Promise<Meal[]>;
    allMeals(): Promise<Meal[]>;
    createMeal(createMealPayload: CreateMealDto, files: {
        image?: Express.Multer.File[];
        video?: Express.Multer.File[];
    }): Promise<Meal>;
    getMealById(id: number): Promise<Meal>;
    updateMeal(id: number, updateMealPayload: UpdateMealDto, files: {
        image?: Express.Multer.File[];
        video?: Express.Multer.File[];
    }): Promise<object>;
    deleteMeal(id: number): Promise<string>;
}
