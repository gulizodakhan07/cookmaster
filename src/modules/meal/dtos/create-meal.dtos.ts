import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';
import { CreateMealRequest } from '../interfaces';
import { INTEGER } from 'sequelize';

export class CreateMealDto implements Omit<CreateMealRequest, 'id'> {
  @ApiProperty({
    type: String,
    example: 'Big Burger',
    required: true,
    description: 'Taom nomi berilishi shart',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: String,
    example: 'Taom description',
    required: true,
    description: 'Taom izohi berilishi shart',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    type: String,
    format: 'binary',
    required: true,
    description: 'Taom rasmini kiriting',
  })
  image: any;

  @ApiProperty({
    type: String,
    format: 'binary',
    required: true,
    description: 'Taom videosini kiriting',
  })
  video: any;

  @ApiProperty({
    type: INTEGER,
    example: 1,
    required: true,
    description: 'Taom category id-si berilishi shart',
  })
  @IsNumberString()
  @IsNotEmpty()
  category_id: number;

  @ApiProperty({
    type: INTEGER,
    example: 1,
    required: true,
    description: 'Taom user id-si berilishi shart',
  })
  @IsNumberString()
  @IsNotEmpty()
  user_id: number;
}