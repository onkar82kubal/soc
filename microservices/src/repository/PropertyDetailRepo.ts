import { PropertyDetails } from "../models/PropertyDetails";

interface IPropertyDetailRepo {
    save(pds:PropertyDetails): Promise<void>;
    update(pds:PropertyDetails): Promise<void>;
    get(society_id:string): Promise<PropertyDetails[]>;
  }


  export class PropertyDetailRepo implements IPropertyDetailRepo {
    async save(pds: PropertyDetails): Promise<void> {
        try {
          await PropertyDetails.create({
            property_id: pds.property_id,
            society_id: pds.society_id, 
            property_number: pds.property_number, 
            type: pds.type,
            configuration: pds.configuration,
            size: pds.size,
            area: pds.area,
            isactive: pds.isactive,
            });
          } catch (error) {
            throw new Error("Failed to create!");
          }
    }
    async update(pds: PropertyDetails): Promise<void> {
        try {
            //  find existing users
            const new_parkings = await PropertyDetails.findOne({
              where: {
                property_id: pds.property_id,
                society_id: pds.society_id
              },
            });
      
            if (!new_parkings) {
              throw new Error("Not found");
            }
            // update
            (new_parkings.property_number = pds.property_number),
            (new_parkings.type = pds.type),
            (new_parkings.configuration = pds.configuration),
            (new_parkings.size = pds.size),
            (new_parkings.area = pds.area),
            (new_parkings.isactive = pds.isactive);
      
            await new_parkings.save();
          } catch (error) {
            throw new Error("Failed to update!");
          }
    }
    async get(society_id:string): Promise<PropertyDetails[]> {
      try {
          return await PropertyDetails.findAll({
            where: { isactive:'Y',society_id:society_id},
            attributes:{ exclude:['id','isactive','createdAt','updatedAt']},
            order: [['createdAt', 'DESC']]
          });
        } catch (error) {
          throw new Error("Failed to feacth data by email!");
        }
      }

  }