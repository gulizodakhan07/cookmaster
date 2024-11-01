import { Product } from './models/product.model';
import { CreateProductRequest } from './interfaces';
import { UploadService } from '../upload';
export declare class ProductService {
    #private;
    private productModel;
    constructor(productModel: typeof Product, upload: UploadService);
    getAllProducts(): Promise<Product[]>;
    createProduct(payload: CreateProductRequest): Promise<any>;
    updateProduct(id: number, updatedPayload: CreateProductRequest): Promise<any>;
    deleteProduct(id: number): Promise<any>;
}
