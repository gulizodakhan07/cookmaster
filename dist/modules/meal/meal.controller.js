"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MealController__service;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealController = void 0;
const common_1 = require("@nestjs/common");
const meal_service_1 = require("./meal.service");
const swagger_1 = require("@nestjs/swagger");
const dtos_1 = require("./dtos");
const platform_express_1 = require("@nestjs/platform-express");
let MealController = class MealController {
    constructor(service) {
        _MealController__service.set(this, void 0);
        __classPrivateFieldSet(this, _MealController__service, service, "f");
    }
    async getAllMeal() {
        return await __classPrivateFieldGet(this, _MealController__service, "f").getAllMeal();
    }
    async allMeals() {
        return await __classPrivateFieldGet(this, _MealController__service, "f").getAllMeal();
    }
    async createMeal(createMealPayload, files) {
        const image = files.image ? files.image[0] : null;
        const video = files.video ? files.video[0] : null;
        return await __classPrivateFieldGet(this, _MealController__service, "f").create({
            ...createMealPayload,
            image,
            video,
        });
    }
    async getMealById(id) {
        return await __classPrivateFieldGet(this, _MealController__service, "f").getMealById(id);
    }
    async updateMeal(id, updateMealPayload, files) {
        const image = files.image ? files.image[0] : null;
        const video = files.video ? files.video[0] : null;
        return await __classPrivateFieldGet(this, _MealController__service, "f").updateMeal(id, {
            ...updateMealPayload,
            image,
            video,
        });
    }
    async deleteMeal(id) {
        await __classPrivateFieldGet(this, _MealController__service, "f").deleteMeal(id);
        return 'Meal sucessfully deleted';
    }
};
exports.MealController = MealController;
_MealController__service = new WeakMap();
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Barcha taomlarni olish' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Barcha taomlar ro‘yxati.' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MealController.prototype, "getAllMeal", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Barcha taomlarni (allMeals) olish' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Barcha taomlar allMeals ro‘yxati.' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MealController.prototype, "allMeals", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Taom yaratish' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
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
    }),
    (0, common_1.Post)('/add'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'image', maxCount: 1 },
        { name: 'video', maxCount: 1 },
    ])),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.CreateMealDto, Object]),
    __metadata("design:returntype", Promise)
], MealController.prototype, "createMeal", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Bitta taomni olish' }),
    (0, swagger_1.ApiParam)({ name: 'mealId', description: 'Taom IDsi', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Taom topildi.' }),
    (0, common_1.Get)(':mealId'),
    __param(0, (0, common_1.Param)('mealId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MealController.prototype, "getMealById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Taomni o‘zgartirish' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiParam)({ name: 'mealId', description: 'O‘zgartirilayotgan taomning IDsi', example: 1 }),
    (0, swagger_1.ApiBody)({
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
    }),
    (0, common_1.Put)('/update/:mealId'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'image', maxCount: 1 },
        { name: 'video', maxCount: 1 },
    ])),
    __param(0, (0, common_1.Param)('mealId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dtos_1.UpdateMealDto, Object]),
    __metadata("design:returntype", Promise)
], MealController.prototype, "updateMeal", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Taomni o‘chirish' }),
    (0, swagger_1.ApiParam)({ name: 'mealId', description: 'O‘chirayotgan taomning IDsi', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Taom muvaffaqiyatli o‘chirildi.' }),
    (0, common_1.Delete)('/delete/:mealId'),
    __param(0, (0, common_1.Param)('mealId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MealController.prototype, "deleteMeal", null);
exports.MealController = MealController = __decorate([
    (0, swagger_1.ApiTags)('Meals'),
    (0, common_1.Controller)('meals'),
    __metadata("design:paramtypes", [meal_service_1.MealService])
], MealController);
//# sourceMappingURL=meal.controller.js.map