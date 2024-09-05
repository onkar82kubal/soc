import { Societies } from "../models/Societies";
import { SocietiesRepo } from "../repository/SocietiesRepo";
import  ObjectId  from "../utils/ObjectId";


interface ISocietyService {
    createSociety(
        society_id: string, 
        society_name: string,
        address: string, 
        pincode: string, 
        email: string, 
        contact: string, 
        isactive: string): Promise<void>;
    updateSociety(
        society_id: string, 
        society_name: string,
        address: string, 
        pincode: string, 
        email: string, 
        contact: string, 
        isactive: string
    ): Promise<void>;
  }

  export class SocietyService implements ISocietyService {
    async createSociety( 
        society_name: string, 
        address: string, 
        pincode: string, 
        email: string, 
        contact: string,): Promise<void> {
            
    //   const society = await new SocietiesRepo().getById(ObjectId.generateObjectId());
            
    //   if (!society) {
    //     throw new Error("Bad Request!");
    //   }
  
      try {
        const new_societies = new Societies();
        new_societies.society_id = ObjectId.generateObjectId();
        new_societies.society_name = society_name;
        new_societies.address = address;
        new_societies.pincode = pincode;
        new_societies.email = email;
        new_societies.contact = contact;
        new_societies.isactive = 'Y';
        
        await new SocietiesRepo().save(new_societies);
      } catch (error) {
        throw new Error("Error!");
      }
    }
    async updateSociety(
        society_id: string, 
        society_name: string, 
        address: string, 
        pincode: string, 
        email: string, 
        contact: string, 
        isactive: string): Promise<void> {
      try {
        const new_societies = new Societies();
        new_societies.society_id = society_id;
        new_societies.society_name = society_name;
        new_societies.address = address;
        new_societies.pincode = pincode;
        new_societies.email = email;
        new_societies.contact = contact;
        new_societies.isactive = isactive;
        await new SocietiesRepo().update(new_societies);
      } catch (error) {
        throw new Error("Error!");
      }
    }
    async findAll() {
        try {
            return await new SocietiesRepo().getAll();
          } catch (error) {
            throw new Error("Error!");
          }
    }
    async retrieveById(id:string) {
        try {
          return await new SocietiesRepo().getById(id);
          } catch (error) {
            throw new Error("Error!");
          }
    }
    
    async findByEmail(email:string) {
        try {
          return await new SocietiesRepo().findByEmail(email);
          } catch (error) {
            throw new Error("Error!");
          }
    }
  }