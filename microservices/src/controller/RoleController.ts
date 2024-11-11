import { Request, Response } from "express";
import { RoleService } from "../service/Role";
import { SocietyService } from "../service/Society";
import { string } from "zod";


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
              role_id:element.role_id,
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
      async findById(req: Request, res: Response) {
        try {
          let id = req.params["id"];
          const new_note = await new RoleService().getRolebyId(id);
          const new_society = await new SocietyService().findAll();  
          let newArray = [];
          newArray.push(new_note);
          const arrayC:any = [];
          newArray.forEach(function(element){
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
              role_id:element.role_id,
              society_name:society_name
            });
          });
          res.status(200).json({
            status: "Ok!",
            message: "Successfully fetched note by id!",
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