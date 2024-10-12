import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: P_Owners.VAR_TABLE_NAME,
})

export class P_Owners extends Model {
  public static VAR_TABLE_NAME = "p_owners" as string;
  public static VAR_ID = "id" as string;
  public static VAR_Owner_Id = "owner_id" as string;
  public static VAR_Role_Id = "role_id" as string;
  public static VAR_Society_Id = "society_id" as string;
  public static VAR_Property_Id = "property_id" as string;
  public static VAR_FirstName = "firstname" as string;
  public static VAR_LastName = "lastname" as string;
  public static VAR_Mobile = "mobile" as string;
  public static VAR_Landline = "landline" as string;
  public static VAR_Email = "email" as string;
  public static VAR_Password = "password" as string;
  public static VAR_On_Rent = "on_rent" as string;
  public static VAR_ISACTIVE = "isactive" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: P_Owners.VAR_ID,
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    field: P_Owners.VAR_Owner_Id,
  })
  owner_id!: string;

  @Column({
    type: DataType.STRING(100),
    field: P_Owners.VAR_Role_Id,
  })
  role_id!: string;

  @Column({
    type: DataType.STRING(100),
    field: P_Owners.VAR_Society_Id,
  })
  society_id!: string;

  @Column({
    type: DataType.STRING(100),
    field: P_Owners.VAR_Property_Id,
  })
  property_id!: string;

  @Column({
    type: DataType.STRING(100),
    field: P_Owners.VAR_FirstName,
  })
  firstname!: string;

  @Column({
    type: DataType.STRING(100),
    field: P_Owners.VAR_LastName,
  })
  lastname!: string;

  @Column({
    type: DataType.STRING(100),
    field: P_Owners.VAR_Mobile,
  })
  mobile!: string;

  @Column({
    type: DataType.STRING(100),
    field: P_Owners.VAR_Landline,
  })
  landline!: string;

  @Column({
    type: DataType.STRING(100),
    field: P_Owners.VAR_Email,
  })
  email!: string;

  @Column({
    type: DataType.STRING(100),
    field: P_Owners.VAR_Password,
  })
  password!: string;

  @Column({
    type: DataType.STRING(100),
    field: P_Owners.VAR_On_Rent,
  })
  on_rent!: string;

  @Column({
    type: DataType.STRING(100),
    field: P_Owners.VAR_ISACTIVE,
  })
  isactive!: string;
}