import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Recipe } from './models';
import { CreateRecipeDto } from './dtos/create-recipe.dtos';
import { UpdateRecipeDto } from './dtos/update-recipe.dtos';
import { Meal } from '../meal/model';
import { Product } from '../product';

@Injectable()
export class RecipeService {
  constructor(
    @InjectModel(Recipe) private readonly recipeModel: typeof Recipe,
    @InjectModel(Meal) private readonly mealModel: typeof Meal,
    @InjectModel(Product) private readonly productModel: typeof Product,
  ) {}

  async create(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    const meal = await this.mealModel.findByPk(createRecipeDto.meal_id);
    const product = await this.productModel.findByPk(createRecipeDto.product_id);

    if (!meal || !product) {
      throw new NotFoundException('Meal or Product not found');
    }

    const recipe = await this.recipeModel.create({
      ...createRecipeDto,
      meal_id: meal.id,
      product_id: product.id,
    });

    return recipe;
  }

  async findAll(): Promise<Recipe[]> {
    return this.recipeModel.findAll({
      include: [Meal, Product],
    });
  }

  async findOne(id: number): Promise<Recipe> {
    const recipe = await this.recipeModel.findByPk(id, {
      include: [Meal, Product],
    });
    if (!recipe) {
      throw new NotFoundException(`Recipe with id ${id} not found`);
    }
    return recipe;
  }

  async update(id: number, updateRecipeDto: UpdateRecipeDto): Promise<Recipe> {
    const recipe = await this.findOne(id);
    if (!recipe) {
      throw new NotFoundException(`Recipe with id ${id} not found`);
    }

    await recipe.update(updateRecipeDto);
    return recipe;
  }

  async remove(id: number): Promise<void> {
    const recipe = await this.findOne(id);
    if (!recipe) {
      throw new NotFoundException(`Recipe with id ${id} not found`);
    }

    await recipe.destroy();
  }
}
