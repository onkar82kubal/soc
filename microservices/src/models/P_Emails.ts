import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: P_Emails.VAR_TABLE_NAME,
})

export class P_Emails extends Model {
  public static VAR_TABLE_NAME = "p_emails" as string;
  public static VAR_ID = "id" as string;
  public static VAR_Email_Id = "email_id" as string;
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
    field: P_Emails.VAR_ID,
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    field: P_Emails.VAR_Email_Id,
  })
  email_id!: string;

  @Column({
    type: DataType.STRING(100),
    field: P_Emails.VAR_Society_Id,
  })
  society_id!: string;

  @Column({
    type: DataType.STRING(100),
    field: P_Emails.VAR_From_Email,
  })
  from_email!: string;

  @Column({
    type: DataType.STRING(100),
    field: P_Emails.VAR_To_Email,
  })
  to_email!: string;

  @Column({
    type: DataType.STRING(100),
    field: P_Emails.VAR_Content,
  })
  content!: string;

  @Column({
    type: DataType.STRING(100),
    field: P_Emails.VAR_Is_Read,
  })
  is_read!: string;


  @Column({
    type: DataType.STRING(100),
    field: P_Emails.VAR_ISACTIVE,
  })
  isactive!: string;
    static email_id: any;
}