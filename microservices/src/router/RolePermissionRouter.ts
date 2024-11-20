import RolePermissionController from "../controller/RolePermissionController";
import validate from "../helper/validate";
import { create, update } from "../schema/RolePermissionSchema";
import BaseRoutes from "./BaseRouter";

class RolePermissionRouter extends BaseRoutes {
  routes(): void {
    this.router.post("/",validate(create), RolePermissionController.create);
    this.router.patch(
      "/:id",
      validate(update),
      RolePermissionController.update
    );
    this.router.get("/", RolePermissionController.getRolePermission);
    this.router.get("/:id", RolePermissionController.findById);
  }
}

export default new RolePermissionRouter().router; 