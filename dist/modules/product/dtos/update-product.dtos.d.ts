import { CreateProductRequest } from '../interfaces/create-product-request.interfaces';
export declare class UpdateProductDto implements Omit<CreateProductRequest, 'image'> {
    name: string;
    image?: any;
}
