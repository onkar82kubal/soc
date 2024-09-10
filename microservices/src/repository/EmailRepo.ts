import { Emails } from "../models/Emails";

interface IEmailRepo {
    save(emails:Emails): Promise<void>;
    update(emails:Emails): Promise<void>;
    findByEmail(email: string,society_id:string): Promise<Emails[]>;
  }


  export class EmailRepo implements IEmailRepo {
    async save(emails:Emails): Promise<void> {
        try {
          await Emails.create({
              society_id: emails.society_id,
              email_id: emails.email_id,
              from_email: emails.from_email,
              to_email: emails.to_email,
              content: emails.content,
              is_read: emails.is_read,
              isactive: emails.isactive,
            });
          } catch (error) {
            throw new Error("Failed to create!");
          }
    }
    async update(emails: Emails): Promise<void> {
        try {
            //  find existing users
            const new_emails = await Emails.findOne({
              where: {
                email_id: emails.email_id,
              },
            });
      
            if (!new_emails) {
              throw new Error("Not found");
            }
            // update
            (new_emails.is_read = emails.is_read),
            (new_emails.isactive = emails.isactive);
      
            await new_emails.save();
          } catch (error) {
            throw new Error("Failed to update!");
          }
    }
    async findByEmail(email: string,society_id:string): Promise<Emails[]> {
      try {
          return await Emails.findAll({
            where: { to_email: email,society_id:society_id, is_read:"N",isactive:"Y" },
            attributes:{ exclude:['id','society_id','is_read','isactive','createdAt','updatedAt']},
            order: [['createdAt', 'DESC']]
          });
        } catch (error) {
          throw new Error("Failed to feacth data by email!");
        }
      }

      async retrieveAll() {
        try {
          return await Emails.findAll({
            where: { is_read:"N",isactive:"Y" },
            // attributes:{ exclude:['id','society_id','is_read','isactive','createdAt','updatedAt']},
            order: [['createdAt', 'DESC']]
          });
        } catch (error) {
          throw new Error("Failed to feacth data!");
        }
      }

  }