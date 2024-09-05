import SocietyController from "../controller/SocietyController";
import validate from "../helper/validate";
import { createSocietySchema, updateSocietySchema } from "../schema/SocietySchema";
import BaseRoutes from "./BaseRouter";

class SocietyRoutes extends BaseRoutes {
  routes(): void {
    this.router.post("/",validate(createSocietySchema), SocietyController.createSociety);
    this.router.patch(
      "/:id",
      validate(updateSocietySchema),
      SocietyController.updateSociety
    );
    this.router.get("/", SocietyController.findAll);
    this.router.get("/:id", SocietyController.findById);
    this.router.get("/email/:email", SocietyController.findByEmail);
  }
}

export default new SocietyRoutes().router;