import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: P_Permissions.VAR_TABLE_NAME,
})

export class P_Permissions extends Model {
  public static VAR_TABLE_NAME = "p_permissions" as string;
  public static VAR_ID = "id" as string;
  public static VAR_Permission_Id = "permission_id" as string;
  public static VAR_Title = "title" as string;
  public static VAR_Controller = "controller" as string;
  public static VAR_ISACTIVE = "isactive" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: P_Permissions.VAR_ID,
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    field: P_Permissions.VAR_Permission_Id,
  })
  permission_id!: string;

  @Column({
    type: DataType.STRING(100),
    field: P_Permissions.VAR_Title,
  })
  title!: string;

  @Column({
    type: DataType.STRING(100),
    field: P_Permissions.VAR_Controller,
  })
  controller!: string;

  
  @Column({
    type: DataType.STRING(100),
    field: P_Permissions.VAR_ISACTIVE,
  })
  isactive!: string;
}