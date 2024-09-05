import { Societies } from "../models/Societies";

interface ISocietiesRepo {
    save(societies: Societies): Promise<void>;
    update(societies: Societies): Promise<void>;
    delete(societiesId: string): Promise<void>;
    getById(societiesId: string): Promise<Societies>;
    getAll(): Promise<Societies[]>;
    findByEmail(email: string): Promise<Societies>;
  }


export class SocietiesRepo implements ISocietiesRepo {
    async save(societies: Societies): Promise<void> {
        try {
          await Societies.create({
              society_id: societies.society_id,
              society_name: societies.society_name,
              address: societies.address,
              pincode: societies.pincode,
              email: societies.email,
              contact: societies.contact,
              isactive: societies.isactive,
            });
          } catch (error) {
            throw new Error("Failed to create!");
          }
    }
    async update(societies: Societies): Promise<void> {
        try {
            //  find existing users
            const new_societies = await Societies.findOne({
              where: {
                society_id: societies.society_id,
              },
            });
      
            if (!new_societies) {
              throw new Error("Not found");
            }
            // update
            new_societies.society_name = societies.society_name;
            (new_societies.address = societies.address),
            (new_societies.pincode = societies.pincode),
            (new_societies.email = societies.email),
            (new_societies.contact = societies.contact),
            (new_societies.isactive = societies.isactive);
      
            await new_societies.save();
          } catch (error) {
            throw new Error("Failed to update!");
          }
    }
    async delete(societiesId: string): Promise<void> {
        try {
            //  find existing users
            const new_users = await Societies.findOne({
              where: {
                society_id: societiesId,
              },
            });
      
            if (!new_users) {
              throw new Error("Societies not found");
            }
            // delete
            await new_users.destroy();
          } catch (error) {
            throw new Error("Failed to delete users!");
          }
    }
    async getById(societiesId: string): Promise<Societies> {
        // throw new Error("Method not implemented.");
        try {
            //  find existing users
            const new_users = await Societies.findOne({
              where: {
                society_id: societiesId,
              },
              attributes:{ exclude:['id']}
            });
      
            if (!new_users) {
              throw new Error("Users not found");
            }
            // users data
            return new_users;
          } catch (error) {
            throw new Error("Failed to delete users!");
          }
    }
    async getAll(): Promise<Societies[]> {
        try {
          return await Societies.findAll({
            attributes:{ exclude:['id']}
          });
          } catch (error) {
            throw new Error("Failed to feacth all data!");
          }
    }
    async findByEmail(email: string): Promise<Societies> {
        try {
            const new_users = await Societies.findOne({
              where: { email: email },
              attributes:{ exclude:['id']}
            });
            if (!new_users) {
              throw new Error("Societies not found!");
            }
            return new_users;
          } catch (error) {
            throw new Error("Failed to feacth data by email!");
          }
        }
        
    }