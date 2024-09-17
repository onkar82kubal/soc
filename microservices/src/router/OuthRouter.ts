import OuthController from "../controller/OwnerController";
import validate from "../helper/validate";
import { LoginSchema } from "../schema/OwnerSchema";
import BaseRoutes from "./BaseRouter";

class OuthRouters extends BaseRoutes {
  routes(): void {
    this.router.post("/",validate(LoginSchema), OuthController.login);
    this.router.get("/mobile", OuthController.generateOTP);
    this.router.post("/mobile", OuthController.verifyOTP);

  }
}

export default new OuthRouters().router; 