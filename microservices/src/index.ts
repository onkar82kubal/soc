import express, { Application, Request, Response } from "express";
import Database from "./config/database";
import cors from "cors";

import NoteRouter from "./router/NoteRouter";
import SocietyRouter from "./router/SocietyRouter";
import NotificationRouter from "./router/NotificationRouter";
import EmailRouter from "./router/EmailRouter";
import VendorRouter from "./router/VendorRouter";
import ParkingRouter from "./router/ParkingRouter";
import RoleRouter from "./router/RoleRouter";
import PropertyDetailsRouter from "./router/PropertyDetailsRouter";
import OwnerRouter from "./router/OwnerRouter";
import OuthRouter from "./router/OuthRouter";
import PermissionRouter from "./router/PermissionRouter";
import UserRoleRouter from "./router/UserRoleRouter";
import RolePermissionRouter from "./router/RolePermissionRouter";

class App {
  public app: Application;
  public corsOptions = {
  "Access-Control-Allow-Origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204,
  "credentials": true,
  "origin": ['http://localhost:5173']
  }
  
  constructor() {
    this.app = express();
    this.app.disable('x-powered-by');
    this.plugins();
    this.databaseSync();
    this.routes();
    
  }

  protected plugins(): void {
    this.app.use(cors(this.corsOptions))
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  protected databaseSync(): void {
    const db = new Database();
    db.post_sequelize?.sync();
    db.my_sequelize?.sync();
  }

  protected routes(): void {
    this.app.route("/").get((req: Request, res: Response) => {
      res.send("welcome home");
    });
    this.app.use("/api/v1/note", NoteRouter);
    this.app.use("/api/v1/society", SocietyRouter);
    this.app.use("/api/v1/notification", NotificationRouter);
    this.app.use("/api/v1/email", EmailRouter);
    this.app.use("/api/v1/vendor", VendorRouter);
    this.app.use("/api/v1/parking", ParkingRouter);
    this.app.use("/api/v1/role", RoleRouter);
    this.app.use("/api/v1/propertydetails", PropertyDetailsRouter);
    this.app.use("/api/v1/owner", OwnerRouter);
    this.app.use("/api/v1/outh", OuthRouter);
    this.app.use("/api/v1/permission", PermissionRouter);
    this.app.use("/api/v1/userrole", UserRoleRouter);
    this.app.use("/api/v1/rolepermission", RolePermissionRouter);
  }
}

const port: number = 8088;
const app = new App().app;

app.listen(port, () => {
  console.log("✅ Server started successfully!");
});