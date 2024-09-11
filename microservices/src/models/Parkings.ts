import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: Parkings.VAR_TABLE_NAME,
})

export class Parkings extends Model {
  public static VAR_TABLE_NAME = "parkings" as string;
  public static VAR_ID = "id" as string;
  public static VAR_Parking_Id = "parking_id" as string;
  public static VAR_Society_Id = "society_id" as string;
  public static VAR_Parking_Type = "parking_type" as string;
  public static VAR_In_Time = "in_time" as string;
  public static VAR_Out_Time = "out_time" as string;
  public static VAR_Date = "date" as string;
  public static VAR_ISACTIVE = "isactive" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: Parkings.VAR_ID,
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    field: Parkings.VAR_Parking_Id,
  })
  parking_id!: string;

  @Column({
    type: DataType.STRING(100),
    field: Parkings.VAR_Society_Id,
  })
  society_id!: string;

  @Column({
    type: DataType.STRING(100),
    field: Parkings.VAR_Parking_Type,
  })
  parking_type!: string;

  @Column({
    type: DataType.STRING(100),
    field: Parkings.VAR_In_Time,
  })
  in_time!: string;

  @Column({
    type: DataType.STRING(100),
    field: Parkings.VAR_Out_Time,
  })
  out_time!: string;

  @Column({
    type: DataType.STRING(100),
    field: Parkings.VAR_Date,
  })
  date!: string;


  @Column({
    type: DataType.STRING(100),
    field: Parkings.VAR_ISACTIVE,
  })
  isactive!: string;
    static parking_id: any;
    static vendor_id: any;
    is_read: any;
}