import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RecipeController } from './recipe.controller';
import { RecipeService } from './recipe.service';
import { Recipe } from './models';
import { MealModule } from '../meal/meal.module';
import { Meal } from '../meal/model';
import { Product } from '../product';

@Module({
  imports: [
    SequelizeModule.forFeature([Recipe,Meal,Product]) 
  ],
  controllers: [RecipeController],
  providers: [RecipeService],
  exports: [RecipeService],
})
export class RecipeModule {}
