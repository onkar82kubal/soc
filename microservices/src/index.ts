import express, { Application, Request, Response } from "express";
import Database from "./config/database";
import AuthenticationRouter from "./router/AuthenticationRouter";
import NoteRouter from "./router/NoteRouter";
import SocietyRouter from "./router/SocietyRouter";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.databaseSync();
    this.plugins();
    this.routes();
  }

  protected plugins(): void {
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
    this.app.use("/api/v1/auth", AuthenticationRouter);
    this.app.use("/api/v1/society", SocietyRouter);
  }
}

const port: number = 8088;
const app = new App().app;

app.listen(port, () => {
  console.log("✅ Server started successfully!");
});