import { PropertyDetails } from "../models/PropertyDetails";
import { P_PropertyDetails } from "../models/P_PropertyDetails";

interface IPropertyDetailRepo {
    save(pds:PropertyDetails,istrial:string): Promise<void>;
    update(pds:PropertyDetails,istrial:string): Promise<void>;
    get(society_id:string,istrial:string): Promise<PropertyDetails[]>;
  }


  export class PropertyDetailRepo implements IPropertyDetailRepo {
    async save(pds: PropertyDetails,istrial:string): Promise<void> {
        try {
          if(istrial ==='Y'){
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
          } else {
            await P_PropertyDetails.create({
              property_id: pds.property_id,
              society_id: pds.society_id, 
              property_number: pds.property_number, 
              type: pds.type,
              configuration: pds.configuration,
              size: pds.size,
              area: pds.area,
              isactive: pds.isactive,
              });
          }
          } catch (error) {
            throw new Error("Failed to create!");
          }
    }
    async update(pds: PropertyDetails,istrial:string): Promise<void> {
        try {
          if(istrial ==='Y'){
            const new_parkings = await PropertyDetails.findOne({
              where: {
                property_id: pds.property_id,
                society_id: pds.society_id
              },
            });
            if (!new_parkings) {
              throw new Error("Not found");
            }
            (new_parkings.property_number = pds.property_number),
            (new_parkings.type = pds.type),
            (new_parkings.configuration = pds.configuration),
            (new_parkings.size = pds.size),
            (new_parkings.area = pds.area),
            (new_parkings.isactive = pds.isactive);
            await new_parkings.save();
          } else {
            const new_parkings = await P_PropertyDetails.findOne({
              where: {
                property_id: pds.property_id,
                society_id: pds.society_id
              },
            });
            if (!new_parkings) {
              throw new Error("Not found");
            }
            (new_parkings.property_number = pds.property_number),
            (new_parkings.type = pds.type),
            (new_parkings.configuration = pds.configuration),
            (new_parkings.size = pds.size),
            (new_parkings.area = pds.area),
            (new_parkings.isactive = pds.isactive);
            await new_parkings.save();            
          }

          } catch (error) {
            throw new Error("Failed to update!");
          }
    }
    async get(society_id:string,istrial:string): Promise<PropertyDetails[]> {
      try {
          if(istrial==='Y') {
            return await P_PropertyDetails.findAll({
              where: { isactive:'Y',society_id:society_id},
              attributes:{ exclude:['id','isactive','createdAt','updatedAt']},
              order: [['createdAt', 'DESC']]
            });
          } else {
            return await PropertyDetails.findAll({
              where: { isactive:'Y',society_id:society_id},
              attributes:{ exclude:['id','isactive','createdAt','updatedAt']},
              order: [['createdAt', 'DESC']]
            });
          }
          
        } catch (error) {
          throw new Error("Failed to feacth data by email!");
        }
      }

  }