import { Sequelize } from "sequelize-typescript";
import * as dotenv from "dotenv";
import { Note } from "../models/Note";
import { Users } from "../models/Users";
import { Societies } from "../models/Societies";
import { Notifications } from "../models/Notifications";
import { Emails } from "../models/Emails";

dotenv.config();


class Database {
  public post_sequelize: Sequelize | undefined;
  public my_sequelize: Sequelize | undefined;

  private POSTGRES_DB = process.env.POSTGRES_DB as string;
  private POSTGRES_HOST = process.env.POSTGRES_HOST as string;
  private POSTGRES_PORT = process.env.POSTGRES_PORT as unknown as number;
  private POSTGRES_USER = process.env.POSTGRES_USER as unknown as string;
  private POSTGRES_PASSWORD = process.env
    .POSTGRES_PASSWORD as unknown as string;

  private MYSQL_DB = process.env.MYSQL_DB as string;
  private MYSQL_USER =  process.env.MYSQL_USER as string;
  private MYSQL_PASSWORD =  process.env.MYSQL_PASSWORD as string;
  private MYSQL_HOST =  process.env.MYSQL_HOST as string;
  private MYSQL_PORT =  process.env.MYSQL_PORT as string;

  constructor() {
    this.connectToPostgreSQL();
    this.connectToMySQL();
  }


  private async connectToPostgreSQL() {
    this.post_sequelize = new Sequelize({
      database: this.POSTGRES_DB,
      username: this.POSTGRES_USER,
      password: this.POSTGRES_PASSWORD,
      host: this.POSTGRES_HOST,
      port: this.POSTGRES_PORT,
      dialect: "postgres",
      models:[Users,Societies,Notifications,Emails]
    });

    await this.post_sequelize
      .authenticate()
      .then(() => {
        console.log(
          "✅ PostgreSQL Connection has been established successfully."
        );
      })
      .catch((err) => {
        console.error("❌ Unable to connect to the PostgreSQL database:", err);
      });
  }

  private async connectToMySQL() {
    this.my_sequelize  = new Sequelize({
      dialect: 'mysql',
      host: this.MYSQL_HOST,
      username: this.MYSQL_USER,
      password: this.MYSQL_PASSWORD,
      database: this.MYSQL_DB,
      models: [Note], 
      logging: false, 
    });
     
    await this.my_sequelize
      .authenticate()
      .then(() => {
        console.log(
          "✅ MySQL Connection has been established successfully."
        );
      })
      .catch((err) => {
        console.error("❌ Unable to connect to the MySQL database:", err);
      });
  }
}

export default Database;