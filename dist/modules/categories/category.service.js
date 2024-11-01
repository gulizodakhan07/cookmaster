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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const fs = require("fs");
const models_1 = require("./models");
const path = require("path");
let CategoryService = class CategoryService {
    constructor(categoryModel) {
        this.categoryModel = categoryModel;
    }
    async createCategory(payload) {
        try {
            return await this.categoryModel.create({
                name: payload.name,
                image: payload.image,
            });
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async getAllCategories() {
        try {
            return await this.categoryModel.findAll();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async categoryById(id) {
        try {
            const category = await this.categoryModel.findByPk(id);
            if (!category) {
                return 'Bunday category mavjud emas';
            }
            return category;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async updateCategory(id, payload) {
        const category = await this.categoryModel.findByPk(id);
        const filePath = path.join(__dirname, "../../uploads", category.image);
        console.log(filePath);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
        return await this.categoryModel.update({
            name: payload.name || category.name,
            image: payload.image || category.image
        }, {
            where: { id }
        });
    }
    async deleteCategory(id) {
        try {
            const category = await this.categoryModel.findByPk(id);
            if (!category) {
                return ' Category not found!';
            }
            const deletedPath = path.join(__dirname, "../../uploads", category.image);
            if (category.image) {
                fs.unlinkSync(deletedPath);
            }
            await this.categoryModel.destroy();
            return {
                message: 'Category deleted successfully',
                statusCode: 200,
                categoryId: category.id
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(models_1.Category)),
    __metadata("design:paramtypes", [Object])
], CategoryService);
//# sourceMappingURL=category.service.js.map