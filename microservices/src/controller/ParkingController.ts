import { Request, Response } from "express";
import { ParkingService } from "../service/Parking";


class ParkingController {

    async createParking(req: Request, res: Response) {
        try {
            const { parking_id,
                society_id,
                parking_type,
                in_time,
                out_time,
                date,
                isactive } = req.body;
            await new ParkingService().createParking(
                parking_id,
                society_id,
                parking_type,
                in_time,
                out_time,
                date,
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
    
      async updateParking(req: Request, res: Response) {
        try {
            const {
                vendor_id,
                society_id,
                name,
                address,
                email,
                specialisation,
                isactive  } = req.body;
      
            await new ParkingService().updateParking(
                vendor_id,
                society_id,
                name,
                address,
                email,
                specialisation,
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
      async findBySociety(req: Request, res: Response) {
        try {
          let society_id ='66d8cf5027e4be6354b9c1c2'
          const new_note = await new ParkingService().findBySociety(society_id);
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

export default new ParkingController()