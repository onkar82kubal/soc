
import { P_UserRole } from "../models/P_UserRole";

interface IUserRoleRepo {
    save(roles:P_UserRole): Promise<void>;
    update(roles:P_UserRole): Promise<void>;
    getAll(): Promise<P_UserRole[]>;
    getbyId(permission_id:string): Promise<P_UserRole>
  }


  export class UserRoleRepo implements IUserRoleRepo {
    
    async save(roles: P_UserRole): Promise<void> {
        try {
          await P_UserRole.create({
            user_id: roles.user_id,
            role_id: roles.role_id
            });
          } catch (error) {
            throw new Error("Failed to create!");
          }
    }
    async update(roles: P_UserRole): Promise<void> {
        try {
            //  find existing users
            const new_parkings = await P_UserRole.findOne({
              where: {
                user_id: roles.user_id,
              },
            });
      
            if (!new_parkings) {
              throw new Error("Not found");
            }
            // update
            (new_parkings.user_id = roles.user_id),
            (new_parkings.role_id = roles.role_id),
      
            await new_parkings.save();
          } catch (error) {
            throw new Error("Failed to update!");
          }
    }
    async getAll(): Promise<P_UserRole[]> {
      try {
          return await P_UserRole.findAll({
            });
        } catch (error) {
          throw new Error("Failed to feacth data by email!");
        }
      }
      async getbyId(user_id:string): Promise<P_UserRole> {
        try {
          const new_users = await P_UserRole.findOne({
            where: { user_id: user_id },
            
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