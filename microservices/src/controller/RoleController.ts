import { Request, Response } from "express";
import { RoleService } from "../service/Role";


class RoleController {

    async createRole(req: Request, res: Response) {  
        try {
            const { 
              role_id,
              title,
              description,
              device_type,
              isactive } = req.body;
            await new RoleService().createRole(
              role_id,
              title,
              description,
              device_type,
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
    
      async updateRole(req: Request, res: Response) {
        try {
            const {
              role_id,
              title,
              description,
              device_type,
              isactive  } = req.body;
      
            await new RoleService().updateRole(
              role_id,
              title,
              description,
              device_type,
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
      async getRole(req: Request, res: Response) {
        try {
          let society_id ='66d8cf5027e4be6354b9c1c2'
          const new_note = await new RoleService().getRole();
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

export default new RoleController()