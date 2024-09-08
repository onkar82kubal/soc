import NotificationController from "../controller/NotificationController";
import validate from "../helper/validate";
import { createNotificationSchema, updateNotificationSchema } from "../schema/NotificationSchema";
import BaseRoutes from "./BaseRouter";

class NotificationRoutes extends BaseRoutes {
  routes(): void {
    this.router.post("/",validate(createNotificationSchema), NotificationController.createNotification);
    this.router.patch(
      "/:id",
      validate(updateNotificationSchema),
      NotificationController.updateNotification
    );
    this.router.patch(
      "/:id",
      validate(updateNotificationSchema),
      NotificationController.updateNotification
    );
    this.router.get("/email/:email", NotificationController.findByEmail);
  }
}

export default new NotificationRoutes().router;