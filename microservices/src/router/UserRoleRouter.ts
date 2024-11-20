import UserRoleController from "../controller/UserRoleController";
import validate from "../helper/validate";
import { create, update } from "../schema/UserRoleSchema";
import BaseRoutes from "./BaseRouter";

class UserRoleRouter extends BaseRoutes {
  routes(): void {
    this.router.post("/",validate(create), UserRoleController.create);
    this.router.patch(
      "/:id",
      validate(update),
      UserRoleController.update
    );
    this.router.get("/", UserRoleController.getUserRole);
    this.router.get("/:id", UserRoleController.findById);
  }
}

export default new UserRoleRouter().router; 