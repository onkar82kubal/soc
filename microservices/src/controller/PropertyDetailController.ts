import { Request, Response } from "express";
import { PropertyDetailService } from "../service/PropertyDetail";


class PropertyDetailController {

    async createPropertyDetail(req: Request, res: Response) {  
        try {
            const { 
              society_id,
              property_number,
              type,
              configuration,
              size,
              area } = req.body;
            await new PropertyDetailService().createPropertyDetail(
                society_id,
                property_number,
                type,
                configuration,
                size,
                area 
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
    
      async updatePropertyDetail(req: Request, res: Response) {
        try {
            const {
                property_id,
                society_id,
                property_number,
                type,
                configuration,
                size,
                area,
                isactive  } = req.body;
      
            await new PropertyDetailService().updatePropertyDetail(
                property_id,
                society_id,
                property_number,
                type,
                configuration,
                size,
                area,
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
          const new_note = await new PropertyDetailService().getRole(society_id);
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

export default new PropertyDetailController()