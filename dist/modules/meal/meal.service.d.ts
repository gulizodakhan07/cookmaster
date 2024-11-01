import { Meal } from './model/meal.model';
import { CreateMealRequest, UpdateMealRequest } from './interfaces';
import { UploadService } from '../upload';
export declare class MealService {
    #private;
    private mealModel;
    constructor(mealModel: typeof Meal, uploadService: UploadService);
    getAllMeal(): Promise<Meal[]>;
    getMealById(id: number): Promise<Meal>;
    create(payload: CreateMealRequest): Promise<any>;
    updateMeal(id: number, updatedPayload: UpdateMealRequest): Promise<any>;
    deleteMeal(id: number): Promise<void>;
}
