import { Parkings } from "../models/Parkings";
import { ParkingRepo } from "../repository/ParkingRepo";
import  ObjectId  from "../utils/ObjectId";


interface IParkingService {
    createParking( 
        parking_id: string, 
        society_id: string, 
        parking_type: string, 
        in_time: string,
        out_time: string, 
        date: string,
        isactive: string): Promise<void>;
    updateParking(
        vendor_id: string, 
        society_id: string, 
        name: string, 
        address: string,
        email: string, 
        specialisation: string,
        isactive: string): Promise<void>;
  }


export class ParkingService implements IParkingService {
    async createParking( 
        parking_id: string, 
        society_id: string, 
        parking_type: string, 
        in_time: string,
        out_time: string, 
        date: string,
        isactive: string): Promise<void> {
              
      try {
        const new_notifications = new Parkings();
        new_notifications.parking_id = ObjectId.generateObjectId();
        new_notifications.society_id = society_id;
        new_notifications.parking_type = parking_type;
        new_notifications.in_time = in_time;
        new_notifications.out_time = out_time;
        new_notifications.date = date;
        new_notifications.isactive = 'Y';
        
        await new ParkingRepo().save(new_notifications);
      } catch (error) {
        throw new Error("Error!");
      }
    }

    async updateParking(
        parking_id: string, 
        society_id: string, 
        name: string, 
        address: string,
        email: string, 
        specialisation: string,
        isactive: string): Promise<void> {
      try {
        const new_notifications = new Parkings();
        new_notifications.parking_id = parking_id;
        new_notifications.isactive = isactive;
        await new ParkingRepo().update(new_notifications);
      } catch (error) {
        throw new Error("Error!");
      }
    }
    async findBySociety(society_id:string) {
      try {
        return await new ParkingRepo().findBySociety(society_id);
        } catch (error) {
          throw new Error("Error!");
        }
  }
    
}