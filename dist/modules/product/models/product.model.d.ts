import { Model } from 'sequelize-typescript';
import { Recipe } from 'src/modules/recipes/models';
export declare class Product extends Model<Product> {
    id: number;
    name: string;
    image: string;
    recipes: Recipe[];
}
