import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: Notifications.VAR_TABLE_NAME,
})

export class Notifications extends Model {
  public static VAR_TABLE_NAME = "notifications" as string;
  public static VAR_ID = "id" as string;
  public static VAR_Notification_Id = "notification_id" as string;
  public static VAR_Society_Id = "society_id" as string;
  public static VAR_From_Email = "from_email" as string;
  public static VAR_To_Email = "to_email" as string;
  public static VAR_Content = "content" as string;
  public static VAR_Is_Read = "is_read" as string;
  public static VAR_ISACTIVE = "isactive" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: Notifications.VAR_ID,
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    field: Notifications.VAR_Notification_Id,
  })
  notification_id!: string;

  @Column({
    type: DataType.STRING(100),
    field: Notifications.VAR_Society_Id,
  })
  society_id!: string;

  @Column({
    type: DataType.STRING(100),
    field: Notifications.VAR_From_Email,
  })
  from_email!: string;

  @Column({
    type: DataType.STRING(100),
    field: Notifications.VAR_To_Email,
  })
  to_email!: string;

  @Column({
    type: DataType.STRING(100),
    field: Notifications.VAR_Content,
  })
  content!: string;

  @Column({
    type: DataType.STRING(100),
    field: Notifications.VAR_Is_Read,
  })
  is_read!: string;


  @Column({
    type: DataType.STRING(100),
    field: Notifications.VAR_ISACTIVE,
  })
  isactive!: string;
    static notification_id: any;
}