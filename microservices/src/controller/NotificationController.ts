import { Request, Response } from "express";
import { NotificationService } from "../service/Notification";


class NotificationController {

    async createNotification(req: Request, res: Response) {
        try {
              console.log('=========>');
              console.log(req.body);
              console.log('=========>');
            const { society_id, from_email, to_email, content,is_read,isactive } = req.body;
            await new NotificationService().createNotification(
                society_id,
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
    
      async updateNotification(req: Request, res: Response) {
        try {
            const {notification_id, is_read,
                is_active  } = req.body;
      
            await new NotificationService().updateNotification(
                notification_id, is_read,
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
      async findByEmail(req: Request, res: Response) {
        try {
          let email = req.params["email"];
          let society_id ='66d8cf5027e4be6354b9c1c2'
          const new_note = await new NotificationService().findByEmail(email,society_id);
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

export default new NotificationController()