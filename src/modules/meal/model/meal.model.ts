import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Category } from 'src/modules/categories/models';
import { Recipe } from 'src/modules/recipes/models';
import { User } from 'src/modules/user';

@Table({ tableName: 'meals', timestamps: true })
export class Meal extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({ allowNull: false, type: DataType.STRING })
    name: string;

    @Column({ type: DataType.TEXT, allowNull: false })
    description: string;

    @Column({ type: DataType.STRING })
    video: string;

    @Column({ type: DataType.STRING })
    image: string;

    @ForeignKey(() => Category)
    @Column({ onDelete: 'CASCADE', onUpdate: 'NO ACTION' })
    category_id: number
    @BelongsTo(() => Category)
    category: Category;


    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: false, onDelete: "CASCADE", onUpdate: "NO ACTION" })
    user_id: number

    @BelongsTo(() => User)
    user: User

    @HasMany(()=> Recipe)
    recipe: Recipe
}