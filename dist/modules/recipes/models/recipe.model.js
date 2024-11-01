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
exports.Recipe = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const model_1 = require("../../meal/model");
const product_1 = require("../../product");
let Recipe = class Recipe extends sequelize_typescript_1.Model {
};
exports.Recipe = Recipe;
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, primaryKey: true, autoIncrement: true }),
    __metadata("design:type", Number)
], Recipe.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Recipe.prototype, "quentity", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => model_1.Meal),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false, onDelete: 'CASCADE', onUpdate: 'NO ACTION' }),
    __metadata("design:type", Number)
], Recipe.prototype, "meal_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => model_1.Meal),
    __metadata("design:type", model_1.Meal)
], Recipe.prototype, "meal", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => product_1.Product),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false, onDelete: 'CASCADE', onUpdate: 'NO ACTION' }),
    __metadata("design:type", Number)
], Recipe.prototype, "product_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => product_1.Product),
    __metadata("design:type", product_1.Product)
], Recipe.prototype, "product", void 0);
exports.Recipe = Recipe = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'recipes', timestamps: true })
], Recipe);
//# sourceMappingURL=recipe.model.js.map