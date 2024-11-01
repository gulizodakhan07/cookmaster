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
exports.MeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const _decorators_1 = require("../../decorators");
const models_1 = require("./models");
const me_service_1 = require("./me.service");
let MeController = class MeController {
    constructor(service) {
        this.service = service;
    }
    async getMe(request) {
        return "";
    }
};
exports.MeController = MeController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: "Barcha foydalanuvchiga tegishli ma'lumotlarni olish" }),
    (0, _decorators_1.Protected)(true),
    (0, _decorators_1.Roles)([models_1.UserRoles.user, models_1.UserRoles.admin]),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MeController.prototype, "getMe", null);
exports.MeController = MeController = __decorate([
    (0, swagger_1.ApiTags)("Me"),
    (0, common_1.Controller)('me'),
    __metadata("design:paramtypes", [me_service_1.MeService])
], MeController);
//# sourceMappingURL=me.controller.js.map