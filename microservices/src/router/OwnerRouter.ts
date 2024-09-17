import OwnerController from "../controller/OwnerController";
import validate from "../helper/validate";
import { createSchema, updatechema } from "../schema/OwnerSchema";
import BaseRoutes from "./BaseRouter";

class OwnerRouters extends BaseRoutes {
  routes(): void {
    this.router.post("/",validate(createSchema), OwnerController.create);
    this.router.patch(
      "/:id",
      validate(updatechema),
      OwnerController.update
    );
    this.router.get("/", OwnerController.get);
    this.router.get("/:id", OwnerController.getById);
  }
}

export default new OwnerRouters().router; 