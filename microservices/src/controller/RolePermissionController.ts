import { Request, Response } from "express";
import { RolePermissionService } from "../service/RolePermission";
import { string } from "zod";


class RolePermissionController {

    async create(req: Request, res: Response) {  
        try {
            const { 
              role_id,
              permission_id
            } = req.body;
            await new RolePermissionService().create(
                role_id,
                permission_id 
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

    async update(req: Request, res: Response) {
        try {
            const {
                role_id,
              permission_id  } = req.body;
      
            await new RolePermissionService().update(
                role_id,
              permission_id 
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
    
    async getRolePermission(req: Request, res: Response) {
        try {
          const new_society = await new RolePermissionService().getAll();  
          res.status(200).json({
            status: "Ok!",
            message: "Successfully fetched",
            data: new_society,
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
          let id = req.params["role_id"];
          const new_note = await new RolePermissionService().getbyId(id);
    
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

export default new RolePermissionController()
