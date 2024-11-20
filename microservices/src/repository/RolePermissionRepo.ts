
import { P_RolePermission } from "../models/P_RolePermission";

interface IRolePermissionRepo {
    save(roles:P_RolePermission): Promise<void>;
    update(roles:P_RolePermission): Promise<void>;
    getAll(): Promise<P_RolePermission[]>;
    getbyId(permission_id:string): Promise<P_RolePermission>
  }


  export class RolePermissionRepo implements IRolePermissionRepo {
    
    async save(roles: P_RolePermission): Promise<void> {
        try {
          await P_RolePermission.create({
            role_id: roles.role_id,
            permission_id: roles.permission_id
            });
          } catch (error) {
            throw new Error("Failed to create!");
          }
    }
    async update(roles: P_RolePermission): Promise<void> {
        try {
            //  find existing users
            const new_parkings = await P_RolePermission.findOne({
              where: {
                role_id: roles.role_id,
              },
            });
      
            if (!new_parkings) {
              throw new Error("Not found");
            }
            // update
            (new_parkings.role_id = roles.role_id),
            (new_parkings.permission_id = roles.permission_id),
      
            await new_parkings.save();
          } catch (error) {
            throw new Error("Failed to update!");
          }
    }
    async getAll(): Promise<P_RolePermission[]> {
      try {
          return await P_RolePermission.findAll({
            });
        } catch (error) {
          throw new Error("Failed to feacth data by email!");
        }
      }
      async getbyId(role_id:string): Promise<P_RolePermission> {
        try {
          const new_users = await P_RolePermission.findOne({
            where: { role_id: role_id },
            
          });
          if (!new_users) {
            throw new Error("Users not found!");
          }
          return new_users;
        } catch (error) {
          throw new Error("Failed to feacth data by id!");
        }

    }
  }