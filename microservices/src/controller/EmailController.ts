import { Request, Response } from "express";
import { EmailService } from "../service/Email";


class EmailController {

    async createEmail(req: Request, res: Response) {
        try {
            const { society_id,email_id, from_email, to_email, content,is_read,isactive } = req.body;
            await new EmailService().createEmail(
                society_id,
                email_id,
                from_email,
                to_email,
                content,
                is_read,
                isactive 
            );
      
            return res.status(200).json({
              status: "Ok!",
              message: "Successful!",
            });
          } catch (error) {
            return res.status(500).json({
              status: "Internal server Error!",
              message: "Internal server Error!",
            });
          }
      }
    
      async updateEmail(req: Request, res: Response) {
        try {
            const {email_id, is_read,
                is_active  } = req.body;
      
            await new EmailService().updateEmail(
                email_id, is_read,
                is_active 
            );
      
            return res.status(200).json({
              status: "Ok!",
              message: "Successful!",
            });
          } catch (error) {
            return res.status(500).json({
              status: "Internal server Error!",
              message: "Internal server Error!",
            });
          }
      }

      async findAll(req: Request, res: Response) {
        try {
          const new_note = await new EmailService().retrieveAll();
    
          res.status(200).json({
            status: "Ok!",
            message: "Successfully fetched all",
            data: new_note,
          });
        } catch (err) {
          res.status(500).json({
            status: "Internal Server Error!",
            message: "Internal Server Error!",
          });
        }
      }

      async findByEmail(req: Request, res: Response) {
        try {
          let email = req.params["email"];
          let society_id ='66d8cf5027e4be6354b9c1c2'
          const new_note = await new EmailService().findByEmail(email,society_id);
          res.status(200).json({
            status: "Ok!",
            message: "Successfully fetched",
            data: new_note,
          });
        } catch (err) {
          res.status(500).json({
            status: "Internal Server Error!",
            message: "Internal Server Error!",
          });
        }
      }  

}

export default new EmailController()