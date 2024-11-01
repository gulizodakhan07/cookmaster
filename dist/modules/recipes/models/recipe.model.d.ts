import { Model } from 'sequelize-typescript';
import { Meal } from 'src/modules/meal/model';
import { Product } from 'src/modules/product';
export declare class Recipe extends Model {
    id: number;
    quentity: string;
    meal_id: number;
    meal: Meal;
    product_id: number;
    product: Product;
}
