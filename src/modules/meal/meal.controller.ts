// import {
//     Body,
//     Controller,
//     Delete,
//     Get,
//     Param,
//     ParseIntPipe,
//     Post,
//     Put,
//     UploadedFile,
//     UploadedFiles,
//     UseInterceptors,
// } from '@nestjs/common';
// import { MealService } from './meal.service';
// import { Meal } from './model/meal.model';
// import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { CreateMealDto, UpdateMealDto } from './dtos';
// import { FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

// @ApiTags('Meals')
// @Controller('meals')
// export class MealController {
//     #_service: MealService;
//     // #_uploadService: UploadService

//     constructor(service: MealService) {
//         this.#_service = service;
//     }

//     @ApiOperation({ summary: 'Barcha malumotlarni olish' })
//     @Get()
//     async getAllMeal(): Promise<Meal[]> {
//         return await this.#_service.getAllMeal();
//     }

//     // @ApiOperation({ summary: 'Malumot yaratish' })
//     @Post('/add')
//     @UseInterceptors(
//         FileFieldsInterceptor([
//             { name: 'image', maxCount: 1 },
//             { name: 'video', maxCount: 1 },
//         ])
//     )
//     async createMeal(
//         @Body() createMealPayload: CreateMealDto,
//         @UploadedFiles() files: { image?: Express.Multer.File[], video?: Express.Multer.File[] }
//     ): Promise<Meal> {
//         const image = files.image ? files.image[0] : null;
//         const video = files.video ? files.video[0] : null;

//         return await this.#_service.create({
//             ...createMealPayload,
//             image,
//             video,
//         });
//     }


//     // @ApiOperation({ summary: 'Malumotlani o`zgartirish' })
//     // @Put('/update/:mealId')
//     // async updateMeal(
//     //   @Body() meal: UpdateMealDto,
//     //   @Param('mealId', ParseIntPipe) id: number,
//     // ): Promise<string> {
//     //   await this.#_service.updateMeal(meal, id);
//     //   return 'updated';
//     // }

//     // @ApiOperation({ summary: 'Malumotni o`chirish' })
//     // @Delete('/delete/:mealId')
//     // async deleteMeal(@Param('mealId', ParseIntPipe) id: number): Promise<string> {
//     //   await this.#_service.deleteMeal(id);
//     //   return 'deleted';
//     // }
// }



import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    UploadedFiles,
    UseInterceptors,
} from '@nestjs/common';
import { MealService } from './meal.service';
import { Meal } from './model/meal.model';
import { ApiOperation, ApiTags, ApiResponse, ApiConsumes, ApiBody, ApiParam } from '@nestjs/swagger';
import { CreateMealDto, UpdateMealDto } from './dtos';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@ApiTags('Meals')
@Controller('meals')
export class MealController {
    #_service: MealService;

    constructor(service: MealService) {
        this.#_service = service;
    }

    @ApiOperation({ summary: 'Barcha taomlarni olish' })
    @ApiResponse({ status: 200, description: 'Barcha taomlar ro‘yxati.' })
    @Get()
    async getAllMeal(): Promise<Meal[]> {
        return await this.#_service.getAllMeal();
    }

    @ApiOperation({ summary: 'Barcha taomlarni (allMeals) olish' })
    @ApiResponse({ status: 200, description: 'Barcha taomlar allMeals ro‘yxati.' })
    @Get()
    async allMeals(): Promise<Meal[]> {
        return await this.#_service.getAllMeal(); // yoki maxsus filter bo'lsa, uni qo'shishingiz mumkin
    }

    @ApiOperation({ summary: 'Taom yaratish' })
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                name: { type: 'string', example: 'Asalli pirog' },
                description: { type: 'string', example: 'Bu asalli pirog' },
                category_id: { type: 'integer', example: 1 },
                user_id: { type: 'integer', example: 3 },
                image: {
                    type: 'string',
                    format: 'binary',
                    description: 'Yuklanadigan rasm fayli',
                },
                video: {
                    type: 'string',
                    format: 'binary',
                    description: 'Yuklanadigan video fayli',
                },
            },
        },
    })
    @Post('/add')
    @UseInterceptors(
        FileFieldsInterceptor([
            { name: 'image', maxCount: 1 },
            { name: 'video', maxCount: 1 },
        ])
    )
    async createMeal(
        @Body() createMealPayload: CreateMealDto,
        @UploadedFiles() files: { image?: Express.Multer.File[], video?: Express.Multer.File[] }
    ): Promise<Meal> {
        const image = files.image ? files.image[0] : null;
        const video = files.video ? files.video[0] : null;

        return await this.#_service.create({
            ...createMealPayload,
            image,
            video,
        });
    }

    @ApiOperation({ summary: 'Bitta taomni olish' })
    @ApiParam({ name: 'mealId', description: 'Taom IDsi', example: 1 })
    @ApiResponse({ status: 200, description: 'Taom topildi.' })
    @Get(':mealId')
    async getMealById(@Param('mealId', ParseIntPipe) id: number): Promise<Meal> {
        return await this.#_service.getMealById(id);
    }

    @ApiOperation({ summary: 'Taomni o‘zgartirish' })
    @ApiConsumes('multipart/form-data')
    @ApiParam({ name: 'mealId', description: 'O‘zgartirilayotgan taomning IDsi', example: 1 })
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                name: { type: 'string', example: 'Yangilangan Pirog' },
                description: { type: 'string', example: 'Yangilangan taom tavsifi' },
                category_id: { type: 'integer', example: 2 },
                user_id: { type: 'integer', example: 5 },
                image: {
                    type: 'string',
                    format: 'binary',
                    description: 'Yangi yuklanadigan rasm fayli',
                },
                video: {
                    type: 'string',
                    format: 'binary',
                    description: 'Yangi yuklanadigan video fayli',
                },
            },
        },
    })
    @Put('/update/:mealId')
    @UseInterceptors(
        FileFieldsInterceptor([
            { name: 'image', maxCount: 1 },
            { name: 'video', maxCount: 1 },
        ])
    )
    async updateMeal(
        @Param('mealId', ParseIntPipe) id: number,
        @Body() updateMealPayload: UpdateMealDto,
        @UploadedFiles() files: { image?: Express.Multer.File[], video?: Express.Multer.File[] }
    ): Promise<object> {
        const image = files.image ? files.image[0] : null;
        const video = files.video ? files.video[0] : null;

        return await this.#_service.updateMeal(id, {
            ...updateMealPayload,
            image,
            video,
        });

    }

    @ApiOperation({ summary: 'Taomni o‘chirish' })
    @ApiParam({ name: 'mealId', description: 'O‘chirayotgan taomning IDsi', example: 1 })
    @ApiResponse({ status: 200, description: 'Taom muvaffaqiyatli o‘chirildi.' })
    @Delete('/delete/:mealId')
    async deleteMeal(@Param('mealId', ParseIntPipe) id: number): Promise<string> {
        await this.#_service.deleteMeal(id);
        return 'Meal sucessfully deleted';
    }
}
