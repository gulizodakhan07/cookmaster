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
var _MealService__uploadedService;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const meal_model_1 = require("./model/meal.model");
const upload_1 = require("../upload");
let MealService = class MealService {
    constructor(mealModel, uploadService) {
        this.mealModel = mealModel;
        _MealService__uploadedService.set(this, void 0);
        __classPrivateFieldSet(this, _MealService__uploadedService, uploadService, "f");
    }
    async getAllMeal() {
        return await this.mealModel.findAll();
    }
    async getMealById(id) {
        const meal = await this.mealModel.findByPk(id);
        if (!meal) {
            throw new common_1.InternalServerErrorException(`Meal with id ${id} not found`);
        }
        return meal;
    }
    async create(payload) {
        try {
            const imageUrl = payload.image ? await __classPrivateFieldGet(this, _MealService__uploadedService, "f").uploadFile({
                file: payload.image,
                bucket: 'uploads/meal/images'
            }) : null;
            const videoUrl = payload.video ? await __classPrivateFieldGet(this, _MealService__uploadedService, "f").uploadFile({
                file: payload.video,
                bucket: 'uploads/meal/videos'
            }) : null;
            const newMeal = await this.mealModel.create({
                name: payload.name,
                image: imageUrl ? imageUrl.imageUrl : null,
                description: payload.description,
                video: videoUrl ? videoUrl.imageUrl : null,
                category_id: payload.category_id,
                user_id: payload.user_id
            });
            return {
                message: 'New meal added successfully',
                data: newMeal,
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async updateMeal(id, updatedPayload) {
        const meal = await this.mealModel.findByPk(id);
        if (!meal) {
            throw new common_1.InternalServerErrorException(`Meal with id ${id} not found`);
        }
        if (updatedPayload.image) {
            if (meal.image) {
                await __classPrivateFieldGet(this, _MealService__uploadedService, "f").removeFile({ fileName: meal.image });
            }
        }
        if (updatedPayload.video) {
            if (meal.video) {
                await __classPrivateFieldGet(this, _MealService__uploadedService, "f").removeFile({ fileName: meal.video });
            }
        }
        let updatedImageUrl = null;
        let updatedVideoUrl = null;
        if (updatedPayload.image) {
            const updatedImage = await __classPrivateFieldGet(this, _MealService__uploadedService, "f").uploadFile({
                file: updatedPayload.image,
                bucket: 'uploads/meal/images',
            });
            updatedImageUrl = updatedImage.imageUrl;
        }
        if (updatedPayload.video) {
            const updatedVideo = await __classPrivateFieldGet(this, _MealService__uploadedService, "f").uploadFile({
                file: updatedPayload.video,
                bucket: 'uploads/meal/videos',
            });
            updatedVideoUrl = updatedVideo.imageUrl;
        }
        await meal.update({
            name: updatedPayload.name,
            description: updatedPayload.description,
            image: updatedImageUrl || meal.image,
            video: updatedVideoUrl || meal.video,
            user_id: updatedPayload.user_id,
            category_id: updatedPayload.category_id,
        });
        return {
            message: 'Product updated successfully!',
            data: meal,
        };
    }
    async deleteMeal(id) {
        const meal = await this.mealModel.findByPk(id);
        if (!meal) {
            throw new common_1.InternalServerErrorException(`Meal with id ${id} not found`);
        }
        await meal.destroy();
    }
};
exports.MealService = MealService;
_MealService__uploadedService = new WeakMap();
exports.MealService = MealService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(meal_model_1.Meal)),
    __metadata("design:paramtypes", [Object, upload_1.UploadService])
], MealService);
//# sourceMappingURL=meal.service.js.map