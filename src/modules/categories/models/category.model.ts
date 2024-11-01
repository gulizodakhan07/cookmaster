
import { Model,Table,Column,DataType,HasMany } from "sequelize-typescript";
import { Meal } from "src/modules/meal/model";


@Table({tableName: 'category',timestamps: true})
export class Category extends Model{
    @Column({type: DataType.INTEGER,primaryKey: true,autoIncrement: true})
    id: number

    @Column({type: DataType.STRING,allowNull: true})
    image: string

    @Column({type: DataType.STRING,allowNull: false,unique: true})
    name: string

    @HasMany(() => Meal)
    meals: Meal[];

    // @HasMany(() => Meal, { onDelete: 'CASCADE', onUpdate: 'NO ACTION' })
    // meal: Meal[];
}
