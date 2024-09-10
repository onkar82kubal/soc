import { Vendors } from "../models/Vendors";

interface IVendorRepo {
    save(vendors:Vendors): Promise<void>;
    update(vendors:Vendors): Promise<void>;
    findBySociety(society_id:string): Promise<Vendors[]>;
  }


  export class VendorRepo implements IVendorRepo {
    async save(vendors: Vendors): Promise<void> {
        try {
          await Vendors.create({
              society_id: vendors.society_id,
              vendor_id: vendors.vendor_id,
              name: vendors.name,
              address: vendors.address,
              email: vendors.email,
              specialisation: vendors.specialisation,
              isactive: vendors.isactive,
            });
          } catch (error) {
            throw new Error("Failed to create!");
          }
    }
    async update(vendors: Vendors): Promise<void> {
        try {
            //  find existing users
            const new_vendors = await Vendors.findOne({
              where: {
                vendor_id: Vendors.vendor_id,
              },
            });
      
            if (!new_vendors) {
              throw new Error("Not found");
            }
            // update
            (new_vendors.name = vendors.name),
            (new_vendors.address = vendors.address),
            (new_vendors.email = vendors.email),
            (new_vendors.specialisation = vendors.specialisation),
            (new_vendors.isactive = vendors.isactive);
      
            await new_vendors.save();
          } catch (error) {
            throw new Error("Failed to update!");
          }
    }
    async findBySociety(society_id:string): Promise<Vendors[]> {
      try {
          return await Vendors.findAll({
            where: { society_id:society_id},
            attributes:{ exclude:['id','createdAt','updatedAt']},
            order: [['createdAt', 'DESC']]
          });
        } catch (error) {
          throw new Error("Failed to feacth data by email!");
        }
      }

  }