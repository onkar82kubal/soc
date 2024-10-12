import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: P_Societies.VAR_TABLE_NAME,
})

export class P_Societies extends Model {
    public static VAR_TABLE_NAME = "p_societies" as string;
    public static VAR_ID = "id" as string;
    public static VAR_Society_Id = "society_id" as string;
    public static VAR_Society_Name = "society_name" as string;
    public static VAR_ADDRESS = "address" as string;
    public static VAR_PINCODE = "pincode" as string;
    public static VAR_EMAIL = "email" as string;
    public static VAR_CONTACT = "contact" as string;
    public static VAR_ISTRIAL = "istrial" as string;
    public static VAR_ISACTIVE = "isactive" as string;
  
    @Column({
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: P_Societies.VAR_ID,
    })
    id!: number;
  
    @Column({
      type: DataType.STRING(100),
      field: P_Societies.VAR_Society_Id,
    })
    society_id!: string;
  
    @Column({
      type: DataType.STRING(100),
      field: P_Societies.VAR_Society_Name,
    })
    society_name!: string;
  
    @Column({
      type: DataType.STRING(100),
      field: P_Societies.VAR_ADDRESS,
    })
    address!: string;
  
    @Column({
      type: DataType.STRING(100),
      field: P_Societies.VAR_PINCODE,
    })
    pincode!: string;

    @Column({
      type: DataType.STRING(100),
      field: P_Societies.VAR_EMAIL,
    })
    email!: string;

    @Column({
      type: DataType.STRING(100),
      field: P_Societies.VAR_CONTACT,
    })
    contact!: string;

    @Column({
      type: DataType.STRING(100),
      field: P_Societies.VAR_ISTRIAL,
    })
    istrial!: string;

    @Column({
      type: DataType.STRING(100),
      field: P_Societies.VAR_ISACTIVE,
    })
    isactive!: string;
  }