import { Sequelize } from "sequelize-typescript";
import * as dotenv from "dotenv";
import { Note } from "../models/Note";
import { Users } from "../models/Users";
import { Societies } from "../models/Societies";
import { P_Societies } from "../models/P_Societies";
import { Notifications } from "../models/Notifications";
import { P_Notifications } from "../models/P_Notifications";
import { Emails } from "../models/Emails";
import { P_Emails } from "../models/P_Emails";
import { Vendors } from "../models/Vendors";
import { P_Vendors } from "../models/P_Vendors";
import { Parkings } from "../models/Parkings";
import { P_Parkings } from "../models/P_Parkings";
import { Roles } from "../models/Roles";
import { P_Roles } from "../models/P_Roles";
import { PropertyDetails } from "../models/PropertyDetails";
import { P_PropertyDetails } from "../models/P_PropertyDetails";
import { Owners } from "../models/Owners";
import { P_Owners } from "../models/P_Owners";
import { P_Permissions } from "../models/P_Permissions";

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
      models:[P_Societies,P_Notifications,P_Emails,P_Vendors,P_Parkings,P_Roles,P_PropertyDetails,P_Owners,P_Permissions]
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
      models: [Notifications,Emails,Vendors,Parkings,PropertyDetails,Owners], 
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