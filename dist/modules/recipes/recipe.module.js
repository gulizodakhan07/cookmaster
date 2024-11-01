"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const recipe_controller_1 = require("./recipe.controller");
const recipe_service_1 = require("./recipe.service");
const models_1 = require("./models");
const model_1 = require("../meal/model");
const product_1 = require("../product");
let RecipeModule = class RecipeModule {
};
exports.RecipeModule = RecipeModule;
exports.RecipeModule = RecipeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([models_1.Recipe, model_1.Meal, product_1.Product])
        ],
        controllers: [recipe_controller_1.RecipeController],
        providers: [recipe_service_1.RecipeService],
        exports: [recipe_service_1.RecipeService],
    })
], RecipeModule);
//# sourceMappingURL=recipe.module.js.map