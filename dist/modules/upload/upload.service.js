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
exports.UploadService = void 0;
const fs = require("fs/promises");
const path = require("path");
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const minio_1 = require("minio");
let UploadService = class UploadService {
    constructor() {
        this.minioClient = new minio_1.Client({
            endPoint: 'localhost',
            port: 9000,
            useSSL: false,
            accessKey: "yIks43JwBw4xwbYWyZ82",
            secretKey: "luzsi67TjAtAjlT0onn3o9c3rL8BFmxz0aUPKFDL"
        });
    }
    async uploadFile(payload) {
        const extName = path.extname(payload.file.originalname);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const fileName = payload.file.fieldname + '-' + uniqueSuffix + extName;
        const isBucketExist = await this.minioClient.bucketExists(payload.bucket);
        if (!isBucketExist) {
            await this.minioClient.makeBucket(payload.bucket);
        }
        const file = await this.minioClient.putObject(payload.bucket, fileName, payload.file.buffer);
        const imageUrl = `${payload.bucket}/${fileName}`;
        return {
            imageUrl,
            message: 'File written successfully',
            etag: file.etag
        };
    }
    async removeFile(payload) {
        await this.minioClient.removeObject(payload.fileName.split("/")[0], payload.fileName.split("/")[1]);
        const filePath = path.join(__dirname, '../../../', payload.fileName);
        const isFileExists = (0, fs_1.existsSync)(filePath);
        if (isFileExists) {
            await fs.unlink(filePath);
        }
        return {
            message: 'File removed successfully',
        };
    }
};
exports.UploadService = UploadService;
exports.UploadService = UploadService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], UploadService);
//# sourceMappingURL=upload.service.js.map