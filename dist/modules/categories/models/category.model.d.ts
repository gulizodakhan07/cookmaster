import { Model } from "sequelize-typescript";
import { Meal } from "src/modules/meal/model";
export declare class Category extends Model {
    id: number;
    image: string;
    name: string;
    meals: Meal[];
}
