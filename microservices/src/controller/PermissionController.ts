import { Request, Response } from "express";
import { PermissionService } from "../service/Permission";


class PermissionController {

    async create(req: Request, res: Response) {  
        try {
            const { 
              permission_id,
              title,
              controller,
              isactive } = req.body;
            await new PermissionService().create(
                permission_id,
                title,
                controller,
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

      async update(req: Request, res: Response) {
        try {
            const {
                permission_id,
                title,
                controller,
                isactive  } = req.body;
      
            await new PermissionService().update(
                permission_id,
                title,
                controller,
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

        async getAll(req: Request, res: Response) {
        try {
            const new_note = await new PermissionService().getAll();
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

        async getbyId(req: Request, res: Response) {
            try {
                let id = req.params["id"];
                const new_note = await new PermissionService().getbyId(id);
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


export default new PermissionController()