import { Request, Response } from "express";
import { UserRoleService } from "../service/UserRole";
import { string } from "zod";


class UserRoleController {

    async create(req: Request, res: Response) {  
        try {
            const { 
              user_id,
              role_id} = req.body;
            await new UserRoleService().create(
                user_id,
                role_id 
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
                user_id,
                role_id  } = req.body;
      
            await new UserRoleService().update(
                user_id,
                role_id 
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
    
    async getUserRole(req: Request, res: Response) {
        try {
          const new_society = await new UserRoleService().getAll();  
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
          let id = req.params["user_id"];
          const new_note = await new UserRoleService().getbyId(id);
    
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

export default new UserRoleController()
