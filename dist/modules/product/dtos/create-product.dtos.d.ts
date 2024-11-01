import { CreateProductRequest } from '../interfaces/create-product-request.interfaces';
export declare class CreateProductDto implements Omit<CreateProductRequest, 'image'> {
    description: string;
    categoryId: number;
    price: number;
    name: string;
    image: any;
}
