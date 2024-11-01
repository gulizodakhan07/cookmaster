import { IsNotEmpty, IsString } from 'class-validator';
import { CreateProductRequest } from '../interfaces/create-product-request.interfaces';
// import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto implements Omit<CreateProductRequest, 'image'> {
  description: string;
  categoryId: number;
  price: number;
 
  // @ApiProperty({
  //   type: String,
  //   example: 'Example Product',
  //   required: true,
  //   description: 'Mahsulot nomi berilishi shart',
  // })
  @IsString()
  @IsNotEmpty()
  name: string;

  // @ApiProperty({
  //   type: String,
  //   format: 'binary',
  //   required: true,
  //   description: 'Mahsulot rasmi berilishi shart',
  // })
  image: any;
}
