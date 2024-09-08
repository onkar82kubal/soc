import { Notifications } from "../models/Notifications";
import { NotificationRepo } from "../repository/NotificationRepo";
import  ObjectId  from "../utils/ObjectId";


interface INotificationService {
    createNotification( 
        society_id: string, 
        from_email: string,
        to_email: string, 
        content: string, 
        is_read: string, 
        isactive: string): Promise<void>;
    updateNotification(
        notification_id: string, 
        is_read: string, 
        isactive: string): Promise<void>;
  }


export class NotificationService implements INotificationService {
    async createNotification( 
        society_id: string, 
        from_email: string,
        to_email: string, 
        content: string, 
        is_read: string, 
        isactive: string): Promise<void> {
              
      try {
        const new_notifications = new Notifications();
        new_notifications.notification_id = ObjectId.generateObjectId();
        new_notifications.society_id = society_id;
        new_notifications.from_email = from_email;
        new_notifications.to_email = to_email;
        new_notifications.content = content;
        new_notifications.is_read = is_read;
        new_notifications.isactive = 'Y';
        
        await new NotificationRepo().save(new_notifications);
      } catch (error) {
        throw new Error("Error!");
      }
    }

    async updateNotification(
        notification_id: string, 
        is_read: string, 
        isactive: string): Promise<void> {
      try {
        const new_notifications = new Notifications();
        new_notifications.notification_id = notification_id;
        new_notifications.is_read = is_read;
        new_notifications.isactive = isactive;
        await new NotificationRepo().update(new_notifications);
      } catch (error) {
        throw new Error("Error!");
      }
    }
    async findByEmail(email:string) {
      try {
        return await new NotificationRepo().findByEmail(email);
        } catch (error) {
          throw new Error("Error!");
        }
  }
    
}