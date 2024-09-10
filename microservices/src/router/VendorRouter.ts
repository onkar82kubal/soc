import VendorController from "../controller/VendorController";
import validate from "../helper/validate";
import { createVendorSchema, updateVendorSchema } from "../schema/VendorSchema";
import BaseRoutes from "./BaseRouter";

class VendorRoutes extends BaseRoutes {
  routes(): void {
    this.router.post("/",validate(createVendorSchema), VendorController.createVendor);
    this.router.patch(
      "/:id",
      validate(updateVendorSchema),
      VendorController.updateVendor
    );
    this.router.get("/society/", VendorController.findBySociety);
  }
}

export default new VendorRoutes().router;