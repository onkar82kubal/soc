import { P_Roles } from "../models/P_Roles";
import { RoleRepo } from "../repository/RoleRepo";
import { SocietiesRepo } from "../repository/SocietiesRepo";
import  ObjectId  from "../utils/ObjectId";


interface IRoleService {
    createRole( 
        role_id: string, 
        title: string, 
        description: string,
        device_type: string,
        isactive: string): Promise<void>;
    updateRole(
        role_id: string, 
        title: string, 
        description: string,
        device_type: string,
        isactive: string): Promise<void>;
  }


export class RoleService implements IRoleService {
    async createRole( 
        role_id: string, 
        title: string, 
        description: string,
        device_type: string,
        isactive: string): Promise<void> {
              
      try {
        const new_notifications = new P_Roles();
        new_notifications.role_id = ObjectId.generateObjectId();
        new_notifications.title = title;
        new_notifications.description = description;
        new_notifications.device_type = device_type;
        new_notifications.isactive = 'Y';
        
        await new RoleRepo().save(new_notifications);
      } catch (error) {
        throw new Error("Error!");
      }
    }

    async updateRole(
        role_id: string, 
        title: string, 
        description: string,
        device_type: string,
        isactive: string): Promise<void> {
      try {
        const new_notifications = new P_Roles();
        new_notifications.role_id = role_id;
        new_notifications.title = title;
        new_notifications.description = description;
        new_notifications.device_type = device_type;
        new_notifications.isactive = isactive;
        await new RoleRepo().update(new_notifications);
      } catch (error) {
        throw new Error("Error!");
      }
    }
    async getRole() {
      try {
        return await new RoleRepo().getRole();
        } catch (error) {
          throw new Error("Error!");
        }
    }

    async getRolebyId(role_id:string) {
      try {
        return await new RoleRepo().getRolebyId(role_id);
        } catch (error) {
          throw new Error("Error!");
        }
    }
    
}