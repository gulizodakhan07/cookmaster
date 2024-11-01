import { Recipe } from './models';
import { CreateRecipeDto } from './dtos/create-recipe.dtos';
import { UpdateRecipeDto } from './dtos/update-recipe.dtos';
import { Meal } from '../meal/model';
import { Product } from '../product';
export declare class RecipeService {
    private readonly recipeModel;
    private readonly mealModel;
    private readonly productModel;
    constructor(recipeModel: typeof Recipe, mealModel: typeof Meal, productModel: typeof Product);
    create(createRecipeDto: CreateRecipeDto): Promise<Recipe>;
    findAll(): Promise<Recipe[]>;
    findOne(id: number): Promise<Recipe>;
    update(id: number, updateRecipeDto: UpdateRecipeDto): Promise<Recipe>;
    remove(id: number): Promise<void>;
}
