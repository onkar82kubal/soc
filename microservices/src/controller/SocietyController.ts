import { Request, Response } from "express";
import { SocietyService } from "../service/Society";


class SocietyController {

    async createSociety(req: Request, res: Response) {
        try {
            const { society_name, address, pincode, email,contact,istrial } = req.body;
            await new SocietyService().createSociety(
                society_name,
                address,
                pincode,
                email,
                contact,
                istrial 
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

      async updateSociety(req: Request, res: Response) {
        try {
            const {society_id, society_name, address, pincode, email,contact,istrial,isactive } = req.body;
      
            await new SocietyService().updateSociety(
                society_id,
                society_name,
                address,
                pincode,
                email,
                contact,
                istrial,
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

      async findAll(req: Request, res: Response) {
        try {
        const new_note = await new SocietyService().findAll();   
          res.status(200).json({
            status: "Ok!",
            message: "Successfully fetched all note data!",
            data: new_note,
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
          const new_note = await new SocietyService().retrieveById(id);
    
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

      async findByEmail(req: Request, res: Response) {
        try {
          let email = req.params["email"];
          const new_note = await new SocietyService().findByEmail(email);
    
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

export default new SocietyController()