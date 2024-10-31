import PermissionController from "../controller/PermissionController";
import validate from "../helper/validate";
import { createSchema, updateSchema } from "../schema/PermissionSchma";
import BaseRoutes from "./BaseRouter";

class PermissionRouters extends BaseRoutes {
  routes(): void {
    this.router.post("/",validate(createSchema), PermissionController.create);
    this.router.patch(
      "/:id",
      validate(updateSchema),
      PermissionController.update
    );
    this.router.get("/", PermissionController.getAll);
  }
}

export default new PermissionRouters().router; 