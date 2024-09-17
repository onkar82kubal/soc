import { Owners } from "../models/Owners";
import { OwnerRepo } from "../repository/OwnerRepo";
import Authentication from "../utils/Authentication";
import  ObjectId  from "../utils/ObjectId";
import * as dotenv from "dotenv";

dotenv.config();

interface IOwnerService {
    create( 
        role_id: string,
        society_id: string,
        property_id: string,
        firstname: string,
        lastname: string,
        mobile: string,
        landline: string,
        email: string,
        password: string,
        on_rent: string,
        isactive: string): Promise<void>;
    update(
        owner_id: string,
        role_id: string,
        society_id: string,
        property_id: string,
        firstname: string,
        lastname: string,
        mobile: string,
        landline: string,
        email: string,
        password: string,
        on_rent: string,
        isactive: string): Promise<void>;
  }


export class OwnerService implements IOwnerService {
    async create( 
        role_id: string,
        society_id: string,
        property_id: string,
        firstname: string,
        lastname: string,
        mobile: string,
        landline: string,
        email: string,
        password: string,
        on_rent: string,
        ): Promise<void> {
              
      try {
        const hashedPassword: string = await Authentication.passwordHash(
            String(process.env.password)
          );
        const new_notifications = new Owners();
        new_notifications.owner_id = ObjectId.generateObjectId();
        new_notifications.role_id = role_id;
        new_notifications.society_id = society_id;
        new_notifications.property_id = property_id;
        new_notifications.firstname = firstname;
        new_notifications.lastname = lastname;
        new_notifications.mobile = mobile;
        new_notifications.landline = landline;
        new_notifications.email = email;
        new_notifications.password = hashedPassword;
        new_notifications.on_rent = on_rent;
        new_notifications.isactive = 'Y';
        
        await new OwnerRepo().save(new_notifications);
      } catch (error) {
        throw new Error("Error!");
      }
    }

    async update(
        owner_id: string,
        role_id: string,
        society_id: string,
        property_id: string,
        firstname: string,
        lastname: string,
        mobile: string,
        landline: string,
        email: string,
        password: string,
        on_rent: string,
        isactive: string): Promise<void> {
      try {
        const hashedPassword: string = await Authentication.passwordHash(
            String(process.env.password)
          );
        const new_notifications = new Owners();
        new_notifications.role_id = role_id;
        new_notifications.society_id = society_id;
        new_notifications.property_id = property_id;
        new_notifications.firstname = firstname;
        new_notifications.lastname = lastname;
        new_notifications.mobile = mobile;
        new_notifications.landline = landline;
        new_notifications.email = email;
        new_notifications.password = hashedPassword;
        new_notifications.on_rent = on_rent;
        new_notifications.isactive = isactive;
        await new OwnerRepo().update(new_notifications);
      } catch (error) {
        throw new Error("Error!");
      }
    }
    async get() {
      try {
        return await new OwnerRepo().get();
        } catch (error) {
          throw new Error("Error!");
        }
    }
    async getById(society_id:string,ownerid:string) {
        try {
          return await new OwnerRepo().getById(society_id,ownerid);
          } catch (error) {
            throw new Error("Error!");
          }
      }
    
}