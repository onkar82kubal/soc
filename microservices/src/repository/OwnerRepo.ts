import { Owners } from "../models/Owners";

interface IOwnerRepo {
    save(owners:Owners): Promise<void>;
    update(owners:Owners): Promise<void>;
  }


  export class OwnerRepo implements IOwnerRepo {
    async save(owners:Owners): Promise<void> {
        try {
          await Owners.create({
            owner_id: owners.owner_id,
            role_id: owners.role_id,
            society_id: owners.society_id,
            property_id: owners.property_id,
            firstname: owners.firstname,
            lastname: owners.lastname,
            mobile: owners.mobile,
            landline: owners.landline,
            email: owners.email,
            password: owners.password,
            on_rent: owners.on_rent,
            isactive: owners.isactive,
            });
          } catch (error) {
            throw new Error("Failed to create!");
          }
    }
    async update(owners:Owners): Promise<void> {
        try {
            //  find existing users
            const new_parkings = await Owners.findOne({
              where: {
                owner_id: owners.owner_id,
              },
            });
      
            if (!new_parkings) {
              throw new Error("Not found");
            }
            // update
            (new_parkings.role_id = owners.role_id),
            (new_parkings.society_id = owners.society_id),
            (new_parkings.property_id = owners.property_id),
            (new_parkings.firstname = owners.firstname),
            (new_parkings.lastname = owners.lastname),
            (new_parkings.mobile = owners.mobile),
            (new_parkings.landline = owners.landline),
            (new_parkings.email = owners.email),
            (new_parkings.password = owners.password),
            (new_parkings.on_rent = owners.on_rent),
            (new_parkings.isactive = owners.isactive);
      
            await new_parkings.save();
          } catch (error) {
            throw new Error("Failed to update!");
          }
    }
    async get(): Promise<Owners[]> {
      try {
          return await Owners.findAll({
            where: { isactive:'Y'},
            attributes:{ exclude:['id','isactive','createdAt','updatedAt']},
            order: [['createdAt', 'DESC']]
          });
        } catch (error) {
          throw new Error("Failed to feacth data by email!");
        }
      }

    async getById(society_id:string,ownerid:string): Promise<Owners[]>  {
        try {
          return await Owners.findAll({
            where: { isactive:'Y',society_id:society_id,ownerid:ownerid},
            attributes:{ exclude:['id','isactive','createdAt','updatedAt']},
            order: [['createdAt', 'DESC']]
          });
        } catch (error) {
          throw new Error("Failed to feacth data by email!");
        }
    }

    async findByEmail(email:string): Promise<Owners>  {
      try {
        const new_note = await Owners.findOne({
          where: { isactive:'Y',email:email},
          attributes:{ exclude:['id','isactive','createdAt','updatedAt']},
          order: [['createdAt', 'DESC']]
        });
        if (!new_note) {
          throw new Error("Note not found!");
        }
        return new_note;
      } catch (error) {
        throw new Error("Failed to feacth data by email!");
      }
    }

    async findByMobile(mobile:string): Promise<Owners>  {
      try {
        const new_note = await Owners.findOne({
          where: { isactive:'Y',mobile:mobile},
          attributes:{ exclude:['id','isactive','createdAt','updatedAt']},
          order: [['createdAt', 'DESC']]
        });
        if (!new_note) {
          throw new Error("Note not found!");
        }
        return new_note;
      } catch (error) {
        throw new Error("Failed to feacth data by mobile!");
      }
    }
  }