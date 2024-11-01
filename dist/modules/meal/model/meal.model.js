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
exports.Meal = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const models_1 = require("../../categories/models");
const models_2 = require("../../recipes/models");
const user_1 = require("../../user");
let Meal = class Meal extends sequelize_typescript_1.Model {
};
exports.Meal = Meal;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Meal.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Meal.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false }),
    __metadata("design:type", String)
], Meal.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Meal.prototype, "video", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Meal.prototype, "image", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => models_1.Category),
    (0, sequelize_typescript_1.Column)({ onDelete: 'CASCADE', onUpdate: 'NO ACTION' }),
    __metadata("design:type", Number)
], Meal.prototype, "category_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => models_1.Category),
    __metadata("design:type", models_1.Category)
], Meal.prototype, "category", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_1.User),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false, onDelete: "CASCADE", onUpdate: "NO ACTION" }),
    __metadata("design:type", Number)
], Meal.prototype, "user_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_1.User),
    __metadata("design:type", user_1.User)
], Meal.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => models_2.Recipe),
    __metadata("design:type", models_2.Recipe)
], Meal.prototype, "recipe", void 0);
exports.Meal = Meal = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'meals', timestamps: true })
], Meal);
//# sourceMappingURL=meal.model.js.map