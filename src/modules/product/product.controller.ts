import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    UploadedFile,
    UseInterceptors,
  } from '@nestjs/common';
  import { Product } from './models/product.model';
  import { ProductService } from './product.service';
  import { CreateProductDto } from './dtos/create-product.dtos';
  import { FileInterceptor } from '@nestjs/platform-express';
import { UpdateCategoryDto } from '../categories/dtos/update-category.dtos';
  // import {
  //   ApiBearerAuth,
  //   ApiConsumes,
  //   ApiOperation,
  //   ApiTags,
  // } from '@nestjs/swagger';
  // import { Protected, Roles } from '@decorators';
  // import { UserRoles } from '../user';
  
  // @ApiTags('Products')
  @Controller('products')
  export class ProductController {
    #_service: ProductService;
  
    constructor(service: ProductService) {
      this.#_service = service;
    }
  
    // @Protected(false)
    // @Roles([UserRoles.admin, UserRoles.user])
    // @ApiOperation({ summary: 'Barcha productlarni olish' })
    @Get()
    async getAllProducts(): Promise<Product[]> {
      return await this.#_service.getAllProducts();
    }
  
    // @Protected(false)
    // @Roles([UserRoles.admin, UserRoles.user])
    // @ApiOperation({ summary: "Barcha productlarni category bo'yicha olish" })
    // @Get('/:categoryId')
    // async getAllProductsByCategory(
    //   @Param('categoryId', ParseIntPipe) categoryId: number,
    // ): Promise<Product[]> {
    //   return await this.#_service.getAllProductsByCategory(categoryId);
    // }
  
    // @ApiBearerAuth()
    // @Protected(true)
    // @Roles([UserRoles.admin])
    // @ApiOperation({ summary: 'Yangi product yaratish' })
    // @ApiConsumes('multipart/form-data')
    @Post('add')
    @UseInterceptors(FileInterceptor('image'))
    async createProduct(
      @Body() createProductPayload: CreateProductDto,
      @UploadedFile() image: Express.Multer.File,
    ): Promise<Product> {
      return await this.#_service.createProduct({
        ...createProductPayload,
        image: image,
      });
    }

    @Put('update/:id')
    @UseInterceptors(FileInterceptor('image'))
    async updateProduct(@Param('id')id: number, @Body() payload: UpdateCategoryDto,@UploadedFile() image: Express.Multer.File): Promise<Product>{
      return this.#_service.updateProduct(id,{...payload,image: image})
    }
  
    // @ApiBearerAuth()
    // @Protected(true)
    // @Roles([UserRoles.admin])
    // @ApiOperation({ summary: "Productni o'chirish" })
    @Delete('/delete/:productId')
    async deleteProduct(
      @Param('productId', ParseIntPipe) productId: number,
    ): Promise<Product> {
      return await this.#_service.deleteProduct(productId);
    }
  }
  