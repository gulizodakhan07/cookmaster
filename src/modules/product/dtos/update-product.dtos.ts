import {  IsOptional, IsString } from 'class-validator';
import { CreateProductRequest } from '../interfaces/create-product-request.interfaces';
// import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto implements Omit<CreateProductRequest, 'image'> {
  
 
  // @ApiProperty({
  //   type: String,
  //   example: 'Example Product',
  //   required: true,
  //   description: 'Mahsulot nomi berilishi shart',
  // })
  @IsString()
  @IsOptional()
  name: string;

  // @ApiProperty({
  //   type: String,
  //   format: 'binary',
  //   required: true,
  //   description: 'Mahsulot rasmi berilishi shart',
  // })
  image?: any;
}
