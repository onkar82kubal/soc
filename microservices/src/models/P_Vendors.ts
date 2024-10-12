import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: P_Vendors.VAR_TABLE_NAME,
})

export class P_Vendors extends Model {
  public static VAR_TABLE_NAME = "p_vendors" as string;
  public static VAR_ID = "id" as string;
  public static VAR_Vendor_Id = "vendor_id" as string;
  public static VAR_Society_Id = "society_id" as string;
  public static VAR_Name = "name" as string;
  public static VAR_Address = "address" as string;
  public static VAR_Email = "email" as string;
  public static VAR_Specialisation = "specialisation" as string;
  public static VAR_ISACTIVE = "isactive" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: P_Vendors.VAR_ID,
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    field: P_Vendors.VAR_Vendor_Id,
  })
  vendor_id!: string;

  @Column({
    type: DataType.STRING(100),
    field: P_Vendors.VAR_Society_Id,
  })
  society_id!: string;

  @Column({
    type: DataType.STRING(100),
    field: P_Vendors.VAR_Name,
  })
  name!: string;

  @Column({
    type: DataType.STRING(100),
    field: P_Vendors.VAR_Address,
  })
  address!: string;

  @Column({
    type: DataType.STRING(100),
    field: P_Vendors.VAR_Email,
  })
  email!: string;

  @Column({
    type: DataType.STRING(100),
    field: P_Vendors.VAR_Specialisation,
  })
  specialisation!: string;


  @Column({
    type: DataType.STRING(100),
    field: P_Vendors.VAR_ISACTIVE,
  })
  isactive!: string;
    static notification_id: any;
    static vendor_id: any;
    is_read: any;
}