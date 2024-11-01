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
var _ProductService__uploadService;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const product_model_1 = require("./models/product.model");
const upload_1 = require("../upload");
let ProductService = class ProductService {
    constructor(productModel, upload) {
        this.productModel = productModel;
        _ProductService__uploadService.set(this, void 0);
        __classPrivateFieldSet(this, _ProductService__uploadService, upload, "f");
    }
    async getAllProducts() {
        return await this.productModel.findAll();
    }
    async createProduct(payload) {
        const fileOptions = await __classPrivateFieldGet(this, _ProductService__uploadService, "f").uploadFile({
            file: payload.image,
            bucket: 'uploads/products',
        });
        console.log(fileOptions);
        const newProduct = await this.productModel.create({
            name: payload.name,
            image: fileOptions.imageUrl,
        });
        return newProduct;
    }
    async updateProduct(id, updatedPayload) {
        const product = await this.productModel.findByPk(id);
        if (!product) {
            return "Product not found";
        }
        if (updatedPayload.image) {
            if (product.image) {
                await __classPrivateFieldGet(this, _ProductService__uploadService, "f").removeFile({ fileName: product.image });
            }
        }
        const updatedImage = await __classPrivateFieldGet(this, _ProductService__uploadService, "f").uploadFile({
            file: updatedPayload.image,
            bucket: 'uploads/products'
        });
        const newProduct = product.update({
            name: updatedPayload.name,
            image: updatedImage.imageUrl
        });
        return {
            message: "Product updated successfully!",
            data: newProduct
        };
    }
    async deleteProduct(id) {
        const foundedProduct = await this.productModel.findByPk(id);
        if (!foundedProduct) {
            throw new common_1.NotFoundException(`Product with ID ${id} not found`);
        }
        await __classPrivateFieldGet(this, _ProductService__uploadService, "f").removeFile({ fileName: foundedProduct.image });
        return await this.productModel.destroy({ where: { id } });
    }
};
exports.ProductService = ProductService;
_ProductService__uploadService = new WeakMap();
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(product_model_1.Product)),
    __metadata("design:paramtypes", [Object, upload_1.UploadService])
], ProductService);
//# sourceMappingURL=product.service.js.map