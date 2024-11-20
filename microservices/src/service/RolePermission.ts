import { P_RolePermission } from "../models/P_RolePermission";
import { RolePermissionRepo } from "../repository/RolePermissionRepo";


interface IRolePermissionService {
    create( 
        role_id: string,
        permission_id: string): Promise<void>;
    update(
        role_id: string,
        permission_id: string): Promise<void>;
  }


  export class RolePermissionService implements IRolePermissionService {

    async create( 
        role_id: string,
        permission_id: string): Promise<void> {
              
      try {
        const new_notifications = new P_RolePermission();
        new_notifications.role_id = role_id;
        new_notifications.permission_id = permission_id;
        
        await new RolePermissionRepo().save(new_notifications);
      } catch (error) {
        throw new Error("Error!");
      }
    }

    async update(
      role_id: string,
      permission_id: string): Promise<void> {
      try {
        const new_notifications = new P_RolePermission();
        new_notifications.permission_id = permission_id;
        new_notifications.role_id = role_id;
        await new RolePermissionRepo().update(new_notifications);
      } catch (error) {
        throw new Error("Error!");
      }
    }

    async getAll() {
        try {
            return await new RolePermissionRepo().getAll();
          } catch (error) {
            throw new Error("Error!");
          }
    }

    async getbyId(id:string) {
        try {
          return await new RolePermissionRepo().getbyId(id);
          } catch (error) {
            throw new Error("Error!");
          }
    }

  }