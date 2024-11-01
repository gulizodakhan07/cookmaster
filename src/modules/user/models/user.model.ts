import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { Meal } from 'src/modules/meal/model';

export enum UserRoles {
  user = 'USER',
  admin = 'ADMIN',
}

@Table({ tableName: 'users', timestamps: true })
export class User extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.TEXT, allowNull: false })
  username: string;

  @Column({ type: DataType.TEXT, allowNull: false, unique: true })
  email: string;

  @Column({type: DataType.STRING,allowNull: false,unique: true})
  password: string

  @Column({
    type: DataType.ENUM,
    values: [UserRoles.admin, UserRoles.user],
    allowNull: false,
    defaultValue: UserRoles.user,
  })
  role: UserRoles;

  @Column({ type: DataType.TEXT, allowNull: true })
  image?: string;

  @HasMany(() => Meal, { onDelete: 'CASCADE', onUpdate: 'NO ACTION' })
    meals: Meal[];

  //   @HasMany(() => Recipe, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  //   recipes: Recipe[];
}
