"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const upload_1 = require("../upload");
const user_controller_1 = require("./user.controller");
const sequelize_1 = require("@nestjs/sequelize");
const models_1 = require("./models");
const me_controller_1 = require("./me.controller");
const me_service_1 = require("./me.service");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([models_1.User])],
        providers: [user_service_1.UserService, upload_1.UploadService, me_service_1.MeService],
        controllers: [user_controller_1.UserController, me_controller_1.MeController],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map