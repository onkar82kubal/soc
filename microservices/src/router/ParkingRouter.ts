import ParkingController from "../controller/ParkingController";
import validate from "../helper/validate";
import { createParkingSchema, updateParkingSchema } from "../schema/ParkingSchema";
import BaseRoutes from "./BaseRouter";

class ParkingRoutes extends BaseRoutes {
  routes(): void {
    this.router.post("/",validate(createParkingSchema), ParkingController.createParking);
    this.router.patch(
      "/:id",
      validate(updateParkingSchema),
      ParkingController.updateParking
    );
    this.router.get("/parking/", ParkingController.findBySociety);
  }
}

export default new ParkingRoutes().router; 