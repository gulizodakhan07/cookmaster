import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Meal } from './model';
import { MealService } from './meal.service';
import { MealController } from './meal.controller';
import { JwtService } from '@nestjs/jwt';
import { UploadService } from '../upload';

@Module({
  imports: [SequelizeModule.forFeature([Meal])],
  providers: [ UploadService, JwtService, MealService],
  controllers: [MealController],
  exports: [MealService]
})
export class MealModule { }