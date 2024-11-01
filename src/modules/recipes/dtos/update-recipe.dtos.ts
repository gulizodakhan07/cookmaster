import { PartialType } from '@nestjs/mapped-types';
import { CreateRecipeDto } from './create-recipe.dtos';

export class UpdateRecipeDto extends PartialType(CreateRecipeDto) {}
