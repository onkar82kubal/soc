import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: P_UserRole.VAR_TABLE_NAME,
})

export class P_UserRole extends Model {
  public static VAR_TABLE_NAME = "p_userrole" as string;
  public static VAR_User_Id = "user_id" as string;
  public static VAR_Role_Id = "role_id" as string;

  @Column({
    type: DataType.STRING(100),
    field: P_UserRole.VAR_User_Id,
  })
  user_id!: string;

  @Column({
    type: DataType.STRING(100),
    field: P_UserRole.VAR_Role_Id,
  })
  role_id!: string;
}