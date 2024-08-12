import AuthenticationController from "../controller/AuthenticationController";
import validate from "../helper/validate";
import { createUserSchema, loginUserSchema } from "../schema/UserSchema";
import BaseRoutes from "./BaseRouter";

class AuthenticationRoutes extends BaseRoutes {
  routes(): void {
    this.router.post("/login",validate(loginUserSchema), AuthenticationController.login);
    this.router.post("/register",validate(createUserSchema), AuthenticationController.register);
  }
}

export default new AuthenticationRoutes().router;