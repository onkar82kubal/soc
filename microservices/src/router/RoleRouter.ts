import RoleController from "../controller/RoleController";
import validate from "../helper/validate";
import { createRoleSchema, updateRoleSchema } from "../schema/RoleSchema";
import BaseRoutes from "./BaseRouter";

class RoleRouters extends BaseRoutes {
  routes(): void {
    this.router.post("/",validate(createRoleSchema), RoleController.createRole);
    this.router.patch(
      "/:id",
      validate(updateRoleSchema),
      RoleController.updateRole
    );
    this.router.get("/", RoleController.getRole);
  }
}

export default new RoleRouters().router; 