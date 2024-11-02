import { Request, Response } from "express";
import { RoleService } from "../service/Role";
import { SocietyService } from "../service/Society";


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
          const new_society = await new SocietyService().findAll();  
          const arrayC:any = [];
          new_note.forEach(function(element){
            let obj = new_society.find(o => o.society_id === element.society_id)
            let society_name = null
            if (typeof obj !== "undefined" ) {
              society_name = obj.society_name
          }
            arrayC.push({
              society_id:element.society_id,
              device_type:element.device_type,
              description:element.description,
              title:element.title,
              society_name:society_name
            });
          });
          res.status(200).json({
            status: "Ok!",
            message: "Successfully fetched",
            data: arrayC,
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