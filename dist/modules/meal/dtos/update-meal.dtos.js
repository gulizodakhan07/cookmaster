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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMealDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const sequelize_1 = require("sequelize");
class UpdateMealDto {
}
exports.UpdateMealDto = UpdateMealDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'Big Burger',
        required: false,
        description: 'Taom nomi berilishi shart',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateMealDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'Taom description',
        required: false,
        description: 'Taom izohi berilishi shart',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateMealDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        format: 'binary',
        required: false,
        description: 'Taom rasmini kiriting',
    }),
    __metadata("design:type", Object)
], UpdateMealDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        format: 'binary',
        required: false,
        description: 'Taom videosini kiriting',
    }),
    __metadata("design:type", Object)
], UpdateMealDto.prototype, "video", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: sequelize_1.INTEGER,
        example: 1,
        required: true,
        description: 'Category id-ni berilishi shart',
    }),
    (0, class_validator_1.IsNumberString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UpdateMealDto.prototype, "category_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: sequelize_1.INTEGER,
        example: 1,
        required: true,
        description: 'User id-ni berilishi shart',
    }),
    (0, class_validator_1.IsNumberString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UpdateMealDto.prototype, "user_id", void 0);
//# sourceMappingURL=update-meal.dtos.js.map