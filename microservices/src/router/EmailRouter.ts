import EmailController from "../controller/EmailController";
import validate from "../helper/validate";
import { createEmailSchema, updateEmailSchema } from "../schema/EmailSchema";
import BaseRoutes from "./BaseRouter";

class EmailRoutes extends BaseRoutes {
  routes(): void {
    this.router.post("/",validate(createEmailSchema), EmailController.createEmail);
    this.router.patch(
      "/:id",
      validate(updateEmailSchema),
      EmailController.updateEmail
    );
    this.router.get("/", EmailController.findAll);
    this.router.get("/email/:email", EmailController.findByEmail);
  }
}

export default new EmailRoutes().router;