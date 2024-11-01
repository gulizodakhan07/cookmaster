import { Model } from 'sequelize-typescript';
import { Category } from 'src/modules/categories/models';
import { Recipe } from 'src/modules/recipes/models';
import { User } from 'src/modules/user';
export declare class Meal extends Model {
    id: number;
    name: string;
    description: string;
    video: string;
    image: string;
    category_id: number;
    category: Category;
    user_id: number;
    user: User;
    recipe: Recipe;
}
