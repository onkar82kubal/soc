import { P_Roles } from "../models/P_Roles";
import { P_Societies } from "../models/P_Societies";

interface IRoleRepoRepo {
    save(roles:P_Roles): Promise<void>;
    update(roles:P_Roles): Promise<void>;
    getRole(): Promise<P_Roles[]>;
    getRolebyId(role_id:string): Promise<P_Roles>
  }


  export class RoleRepo implements IRoleRepoRepo {
    
    async save(roles: P_Roles): Promise<void> {
        try {
          await P_Roles.create({
            role_id: roles.role_id,
            title: roles.title, 
            description: roles.description,
            device_type: roles.device_type,
            isactive: roles.isactive,
            });
          } catch (error) {
            throw new Error("Failed to create!");
          }
    }
    async update(roles: P_Roles): Promise<void> {
        try {
            //  find existing users
            const new_parkings = await P_Roles.findOne({
              where: {
                role_id: roles.role_id,
              },
            });
      
            if (!new_parkings) {
              throw new Error("Not found");
            }
            // update
            (new_parkings.title = roles.title),
            (new_parkings.title = roles.description),
            (new_parkings.title = roles.device_type),
            (new_parkings.isactive = roles.isactive);
      
            await new_parkings.save();
          } catch (error) {
            throw new Error("Failed to update!");
          }
    }
    async getRole(): Promise<P_Roles[]> {
      try {
          const results = await P_Roles.findAll({
            where: { isactive:'Y'},
            attributes:{ exclude:['id','isactive','createdAt','updatedAt']},
            order: [['createdAt', 'DESC']]
          });
          return results
        } catch (error) {
          throw new Error("Failed to feacth data by email!");
        }
      }
      async getRolebyId(role_id:string): Promise<P_Roles> {
        try {
          const new_users = await P_Roles.findOne({
            where: {  isactive:'Y',role_id: role_id },
            attributes:{ exclude:['id','isactive','createdAt','updatedAt']},
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