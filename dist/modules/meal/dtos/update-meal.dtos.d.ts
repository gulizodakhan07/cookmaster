import { UpdateMealRequest } from '../interfaces';
export declare class UpdateMealDto implements Omit<UpdateMealRequest, 'id'> {
    name: string;
    description: string;
    image: any;
    video: any;
    category_id: number;
    user_id: number;
}
