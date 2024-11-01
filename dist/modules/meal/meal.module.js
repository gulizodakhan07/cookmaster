"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const model_1 = require("./model");
const meal_service_1 = require("./meal.service");
const meal_controller_1 = require("./meal.controller");
const jwt_1 = require("@nestjs/jwt");
const upload_1 = require("../upload");
let MealModule = class MealModule {
};
exports.MealModule = MealModule;
exports.MealModule = MealModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([model_1.Meal])],
        providers: [upload_1.UploadService, jwt_1.JwtService, meal_service_1.MealService],
        controllers: [meal_controller_1.MealController],
        exports: [meal_service_1.MealService]
    })
], MealModule);
//# sourceMappingURL=meal.module.js.map