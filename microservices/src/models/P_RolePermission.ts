import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: P_RolePermission.VAR_TABLE_NAME,
})

export class P_RolePermission extends Model {
  public static VAR_TABLE_NAME = "p_rolepermission" as string;
  public static VAR_Role_Id = "role_id" as string;
  public static VAR_Permission_Id = "permission_id" as string;

  @Column({
    type: DataType.STRING(100),
    field: P_RolePermission.VAR_Role_Id,
  })
  role_id!: string;

  @Column({
    type: DataType.STRING(100),
    field: P_RolePermission.VAR_Permission_Id,
  })
  permission_id!: string;
}