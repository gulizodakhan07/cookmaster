import { CreateMealRequest } from '../interfaces';
export declare class CreateMealDto implements Omit<CreateMealRequest, 'id'> {
    name: string;
    description: string;
    image: any;
    video: any;
    category_id: number;
    user_id: number;
}
