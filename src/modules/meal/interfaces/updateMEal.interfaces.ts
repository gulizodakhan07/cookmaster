export declare interface UpdateMealRequest {
    name: string;
    description: string;
    video: Express.Multer.File;
    image: Express.Multer.File;
    category_id: number;
    user_id: number;
  }