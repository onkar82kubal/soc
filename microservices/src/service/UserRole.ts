import { P_UserRole } from "../models/P_UserRole";
import { UserRoleRepo } from "../repository/UserRoleRepo";


interface IUserRoleService {
    create( 
        user_id: string,
        role_id: string): Promise<void>;
    update(
        user_id: string,
        role_id: string): Promise<void>;
  }


  export class UserRoleService implements IUserRoleService {

    async create( 
        user_id: string,
        role_id: string): Promise<void> {
              
      try {
        const new_notifications = new P_UserRole();
        new_notifications.user_id = user_id;
        new_notifications.role_id = role_id;
        
        await new UserRoleRepo().save(new_notifications);
      } catch (error) {
        throw new Error("Error!");
      }
    }

    async update(
        user_id: string,
        role_id: string): Promise<void> {
      try {
        const new_notifications = new P_UserRole();
        new_notifications.user_id = user_id;
        new_notifications.role_id = role_id;
        await new UserRoleRepo().update(new_notifications);
      } catch (error) {
        throw new Error("Error!");
      }
    }

    async getAll() {
        try {
            return await new UserRoleRepo().getAll();
          } catch (error) {
            throw new Error("Error!");
          }
    }

    async getbyId(id:string) {
        try {
          return await new UserRoleRepo().getbyId(id);
          } catch (error) {
            throw new Error("Error!");
          }
    }

  }