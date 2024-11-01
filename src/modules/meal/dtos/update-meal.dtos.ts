import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString, IsOptional, IsString } from 'class-validator';
import { INTEGER } from 'sequelize';
import { UpdateMealRequest } from '../interfaces';

export class UpdateMealDto implements Omit<UpdateMealRequest, 'id'> {
  @ApiProperty({
    type: String,
    example: 'Big Burger',
    required: false,
    description: 'Taom nomi berilishi shart',
  })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({
    type: String,
    example: 'Taom description',
    required: false,
    description: 'Taom izohi berilishi shart',
  })
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty({
    type: String,
    format: 'binary',
    required: false,
    description: 'Taom rasmini kiriting',
  })
  image: any;

  @ApiProperty({
    type: String,
    format: 'binary',
    required: false,
    description: 'Taom videosini kiriting',
  })
  video: any;

  @ApiProperty({
    type: INTEGER,
    example: 1,
    required: true,
    description: 'Category id-ni berilishi shart',
  })
  @IsNumberString()
  @IsNotEmpty()
  category_id: number;

  @ApiProperty({
    type: INTEGER,
    example: 1,
    required: true,
    description: 'User id-ni berilishi shart',
  })
  @IsNumberString()
  @IsNotEmpty()
  user_id: number;
}