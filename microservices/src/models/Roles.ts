import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: Roles.VAR_TABLE_NAME,
})

export class Roles extends Model {
  public static VAR_TABLE_NAME = "roles" as string;
  public static VAR_ID = "id" as string;
  public static VAR_Role_Id = "role_id" as string;
  public static VAR_Title = "title" as string;
  public static VAR_Description = "description" as string;
  public static VAR_Device_Type = "device_type" as string;
  public static VAR_ISACTIVE = "isactive" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: Roles.VAR_ID,
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    field: Roles.VAR_Role_Id,
  })
  role_id!: string;

  @Column({
    type: DataType.STRING(100),
    field: Roles.VAR_Title,
  })
  title!: string;

  @Column({
    type: DataType.STRING(100),
    field: Roles.VAR_Description,
  })
  description!: string;

  @Column({
    type: DataType.STRING(100),
    field: Roles.VAR_Device_Type,
  })
  device_type!: string;

  @Column({
    type: DataType.STRING(100),
    field: Roles.VAR_ISACTIVE,
  })
  isactive!: string;
}