import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dtos/create-recipe.dtos';
import { Recipe } from './models';
import { UpdateRecipeDto } from './dtos/update-recipe.dtos';
export declare class RecipeController {
    private readonly recipeService;
    constructor(recipeService: RecipeService);
    create(createRecipeDto: CreateRecipeDto): Promise<Recipe>;
    findAll(): Promise<Recipe[]>;
    findOne(id: string): Promise<Recipe>;
    update(id: string, updateRecipeDto: UpdateRecipeDto): Promise<Recipe>;
    remove(id: string): Promise<void>;
}
