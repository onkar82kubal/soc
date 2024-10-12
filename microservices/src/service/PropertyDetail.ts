import { PropertyDetails } from "../models/PropertyDetails";
import { PropertyDetailRepo } from "../repository/PropertyDetailRepo";
import { SocietiesRepo } from "../repository/SocietiesRepo";
import  ObjectId  from "../utils/ObjectId";


interface IPropertyDetailService {
    createPropertyDetail( 
            property_id: string,
            society_id: string,
            property_number: string,
            type: string,
            configuration: string,
            size: string,
            area: string,
            isactive: string): Promise<void>;
    updatePropertyDetail(
            property_id: string,
            society_id: string,
            property_number: string,
            type: string,
            configuration: string,
            size: string,
            area: string,
            isactive: string): Promise<void>;
  }


export class PropertyDetailService implements IPropertyDetailService {
    async createPropertyDetail( 
            society_id: string,
            property_number: string,
            type: string,
            configuration: string,
            size: string,
            area: string,): Promise<void> {
              
      try {
        const society = await new SocietiesRepo().getById(society_id)
        const new_notifications = new PropertyDetails();
        new_notifications.property_id = ObjectId.generateObjectId();
        new_notifications.society_id = society_id;
        new_notifications.property_number = property_number;
        new_notifications.type = type;
        new_notifications.configuration = configuration;
        new_notifications.size = size;
        new_notifications.area = area;
        new_notifications.isactive = 'Y'; 
        await new PropertyDetailRepo().save(new_notifications,society.istrial);
      } catch (error) {
        throw new Error("Error!");
      }
    }

    async updatePropertyDetail(
            property_id: string,
            society_id: string,
            property_number: string,
            type: string,
            configuration: string,
            size: string,
            area: string,
            isactive: string): Promise<void> {
      try {
        const society = await new SocietiesRepo().getById(society_id)
        const new_notifications = new PropertyDetails();
        new_notifications.property_id = property_id;
        new_notifications.society_id = society_id;
        new_notifications.property_number = property_number;
        new_notifications.type = type;
        new_notifications.configuration = configuration;
        new_notifications.size = size;
        new_notifications.area = area;
        new_notifications.isactive = isactive;
        await new PropertyDetailRepo().update(new_notifications,society.istrial);
      } catch (error) {
        throw new Error("Error!");
      }
    }
    async getProperties(society_id:string) {
      try {
        const society = await new SocietiesRepo().getById(society_id)
        return await new PropertyDetailRepo().get(society.society_id,society.istrial);
        } catch (error) {
          throw new Error("Error!");
        }
  }
    
}