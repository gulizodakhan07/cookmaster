import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Meal } from 'src/modules/meal/model';
import { Product } from 'src/modules/product';

@Table({tableName: 'recipes',timestamps: true})
export class Recipe extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;
  
  @Column({ type: DataType.STRING, allowNull: false })
  quentity: string;

  @ForeignKey(() => Meal)
  @Column({ type: DataType.INTEGER, allowNull: false, onDelete: 'CASCADE', onUpdate: 'NO ACTION' })
  meal_id: number;

  @BelongsTo(() => Meal)
  meal: Meal;

  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER, allowNull: false, onDelete: 'CASCADE', onUpdate: 'NO ACTION' })
  product_id: number;

  @BelongsTo(() => Product)
  product: Product;
}
