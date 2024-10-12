import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: P_PropertyDetails.VAR_TABLE_NAME,
})

export class P_PropertyDetails extends Model {
  public static VAR_TABLE_NAME = "p_propertydetails" as string;
  public static VAR_ID = "id" as string;
  public static VAR_Property_Id = "property_id" as string;
  public static VAR_Society_Id = "society_id" as string;
  public static VAR_Property_Number = "property_number" as string;
  public static VAR_Type = "type" as string;
  public static VAR_Configuration = "configuration" as string;
  public static VAR_Size = "size" as string;
  public static VAR_Area = "area" as string;
  public static VAR_ISACTIVE = "isactive" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: P_PropertyDetails.VAR_ID,
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    field: P_PropertyDetails.VAR_Property_Id,
  })
  property_id!: string;

  @Column({
    type: DataType.STRING(100),
    field: P_PropertyDetails.VAR_Society_Id,
  })
  society_id!: string;

  @Column({
    type: DataType.STRING(100),
    field: P_PropertyDetails.VAR_Property_Number,
  })
  property_number!: string;

  @Column({
    type: DataType.STRING(100),
    field: P_PropertyDetails.VAR_Type,
  })
  type!: string;

  @Column({
    type: DataType.STRING(100),
    field: P_PropertyDetails.VAR_Configuration,
  })
  configuration!: string;

  @Column({
    type: DataType.STRING(100),
    field: P_PropertyDetails.VAR_Size,
  })
  size!: string;

  @Column({
    type: DataType.STRING(100),
    field: P_PropertyDetails.VAR_Area,
  })
  area!: string;

  @Column({
    type: DataType.STRING(100),
    field: P_PropertyDetails.VAR_ISACTIVE,
  })
  isactive!: string;
}