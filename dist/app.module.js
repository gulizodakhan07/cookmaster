"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const serve_static_1 = require("@nestjs/serve-static");
const core_1 = require("@nestjs/core");
const jwt_1 = require("@nestjs/jwt");
const throttler_1 = require("@nestjs/throttler");
const _config_1 = require("./config");
const _guards_1 = require("./guards");
const model_1 = require("./modules/meal/model");
const meal_module_1 = require("./modules/meal/meal.module");
const models_1 = require("./modules/categories/models");
const category_module_1 = require("./modules/categories/category.module");
const user_1 = require("./modules/user");
const models_2 = require("./modules/recipes/models");
const recipe_module_1 = require("./modules/recipes/recipe.module");
const product_1 = require("./modules/product");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            throttler_1.ThrottlerModule.forRoot([{
                    ttl: 30000,
                    limit: 300,
                }]),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [_config_1.appConfig, _config_1.dbConfig, _config_1.jwtConfig],
            }),
            serve_static_1.ServeStaticModule.forRoot({
                serveRoot: '/uploads',
                rootPath: './uploads',
            }),
            jwt_1.JwtModule.register({
                secret: 'my secret',
                global: true,
                signOptions: {
                    expiresIn: 60 * 15,
                },
            }),
            sequelize_1.SequelizeModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (config) => {
                    try {
                        return {
                            dialect: 'postgres',
                            host: config.get('database.host'),
                            port: config.get('database.port'),
                            username: config.get('database.user'),
                            password: config.get('database.password'),
                            database: config.get('database.dbName'),
                            models: [model_1.Meal, models_1.Category, user_1.User, models_2.Recipe, product_1.Product],
                            synchronize: true,
                            logging: console.log,
                            autoLoadModels: true,
                        };
                    }
                    catch (error) {
                        console.log(error);
                    }
                },
            }),
            meal_module_1.MealModule,
            category_module_1.CategoryModule,
            user_1.UserModule,
            recipe_module_1.RecipeModule,
            product_1.ProductModule
        ],
        providers: [
            {
                useClass: _guards_1.CheckAuthGuard,
                provide: core_1.APP_GUARD,
            },
            {
                useClass: _guards_1.CheckRoleGuard,
                provide: core_1.APP_GUARD,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map