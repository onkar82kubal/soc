import { Notifications } from "../models/Notifications";

interface INotificationRepo {
    save(notifications:Notifications): Promise<void>;
    update(notifications:Notifications): Promise<void>;
    findByEmail(email: string,society_id:string): Promise<Notifications[]>;
  }


  export class NotificationRepo implements INotificationRepo {
    async save(notifications: Notifications): Promise<void> {
        try {
          await Notifications.create({
              society_id: notifications.society_id,
              notification_id: notifications.notification_id,
              from_email: notifications.from_email,
              to_email: notifications.to_email,
              content: notifications.content,
              is_read: notifications.is_read,
              isactive: notifications.isactive,
            });
          } catch (error) {
            throw new Error("Failed to create!");
          }
    }
    async update(notifications: Notifications): Promise<void> {
        try {
            //  find existing users
            const new_notifications = await Notifications.findOne({
              where: {
                notification_id: Notifications.notification_id,
              },
            });
      
            if (!new_notifications) {
              throw new Error("Not found");
            }
            // update
            (new_notifications.is_read = notifications.is_read),
            (new_notifications.isactive = notifications.isactive);
      
            await new_notifications.save();
          } catch (error) {
            throw new Error("Failed to update!");
          }
    }
    async findByEmail(email: string,society_id:string): Promise<Notifications[]> {
      try {
          return await Notifications.findAll({
            where: { to_email: email,society_id:society_id, is_read:"N",isactive:"Y" },
            attributes:{ exclude:['id','society_id','is_read','isactive','createdAt','updatedAt']},
            order: [['createdAt', 'DESC']]
          });
        } catch (error) {
          throw new Error("Failed to feacth data by email!");
        }
      }

  }