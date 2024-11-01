import { Model } from 'sequelize-typescript';
import { Meal } from 'src/modules/meal/model';
export declare enum UserRoles {
    user = "USER",
    admin = "ADMIN"
}
export declare class User extends Model {
    id: number;
    username: string;
    email: string;
    password: string;
    role: UserRoles;
    image?: string;
    meals: Meal[];
}
