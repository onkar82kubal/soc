import { Emails } from "../models/Emails";
import { EmailRepo } from "../repository/EmailRepo";
import  ObjectId  from "../utils/ObjectId";


interface IEmailService {
    createEmail( 
        society_id: string, 
        email_id: string, 
        from_email: string,
        to_email: string, 
        content: string, 
        is_read: string, 
        isactive: string): Promise<void>;
    updateEmail(
        email_id: string, 
        is_read: string, 
        isactive: string): Promise<void>;
  }


export class EmailService implements IEmailService {
    async createEmail( 
        society_id: string, 
        email_id: string, 
        from_email: string,
        to_email: string, 
        content: string, 
        is_read: string, 
        isactive: string): Promise<void> {
              
      try {
        const new_notifications = new Emails();
        new_notifications.email_id = ObjectId.generateObjectId();
        new_notifications.society_id = society_id;
        new_notifications.from_email = from_email;
        new_notifications.to_email = to_email;
        new_notifications.content = content;
        new_notifications.is_read = is_read;
        new_notifications.isactive = 'Y';
        
        await new EmailRepo().save(new_notifications);
      } catch (error) {
        throw new Error("Error!");
      }
    }

    async updateEmail(
        email_id: string, 
        is_read: string, 
        isactive: string): Promise<void> {
      try {
        const new_notifications = new Emails();
        new_notifications.email_id = email_id;
        new_notifications.is_read = is_read;
        new_notifications.isactive = isactive;
        await new EmailRepo().update(new_notifications);
      } catch (error) {
        throw new Error("Error!");
      }
    }
    async findByEmail(email:string,society_id:string) {
      try {
        return await new EmailRepo().findByEmail(email,society_id);
        } catch (error) {
          throw new Error("Error!");
        }
  }
  async retrieveAll(){
    try {
      return await new EmailRepo().retrieveAll();
      } catch (error) {
        throw new Error("Error!");
      }
  }
    
}