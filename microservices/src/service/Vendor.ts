import { Vendors } from "../models/Vendors";
import { VendorRepo } from "../repository/VendorRepo";
import  ObjectId  from "../utils/ObjectId";


interface IVendorService {
    createVendor( 
        society_id: string, 
        name: string, 
        address: string,
        email: string, 
        specialisation: string,
        isactive: string): Promise<void>;
    updateVendor(
        vendor_id: string, 
        society_id: string, 
        name: string, 
        address: string,
        email: string, 
        specialisation: string,
        isactive: string): Promise<void>;
  }


export class VendorService implements IVendorService {
    async createVendor( 
        society_id: string, 
        name: string, 
        address: string,
        email: string, 
        specialisation: string,
        isactive: string): Promise<void> {
              
      try {
        const new_notifications = new Vendors();
        new_notifications.vendor_id = ObjectId.generateObjectId();
        new_notifications.society_id = society_id;
        new_notifications.name = name;
        new_notifications.address = address;
        new_notifications.email = email;
        new_notifications.specialisation = specialisation;
        new_notifications.isactive = 'Y';
        
        await new VendorRepo().save(new_notifications);
      } catch (error) {
        throw new Error("Error!");
      }
    }

    async updateVendor(
        vendor_id: string, 
        society_id: string, 
        name: string, 
        address: string,
        email: string, 
        specialisation: string,
        isactive: string): Promise<void> {
      try {
        const new_notifications = new Vendors();
        new_notifications.vendor_id = vendor_id;
        new_notifications.isactive = isactive;
        await new VendorRepo().update(new_notifications);
      } catch (error) {
        throw new Error("Error!");
      }
    }
    async findBySociety(society_id:string) {
      try {
        return await new VendorRepo().findBySociety(society_id);
        } catch (error) {
          throw new Error("Error!");
        }
  }
    
}