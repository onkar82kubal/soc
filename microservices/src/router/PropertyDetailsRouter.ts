import PropertyDetailController from "../controller/PropertyDetailController";
import validate from "../helper/validate";
import { createPropertyDetailSchema, updatePropertyDetailSchema } from "../schema/PropertyDetailSchema";
import BaseRoutes from "./BaseRouter";

class PropertyDetailsRouters extends BaseRoutes {
  routes(): void {
    this.router.post("/",validate(createPropertyDetailSchema), PropertyDetailController.createPropertyDetail);
    this.router.patch(
      "/:id",
      validate(updatePropertyDetailSchema),
      PropertyDetailController.updatePropertyDetail
    );
    this.router.get("/", PropertyDetailController.getRole);
  }
}

export default new PropertyDetailsRouters().router; 