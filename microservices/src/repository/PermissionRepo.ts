import { P_Permissions } from "../models/P_Permissions";

interface IP_PermissionRepo {
    save(roles:P_Permissions): Promise<void>;
    update(roles:P_Permissions): Promise<void>;
    getAll(): Promise<P_Permissions[]>;
    getbyId(permission_id:string): Promise<P_Permissions>
  }


  export class PermissionRepo implements IP_PermissionRepo {
    
    async save(roles: P_Permissions): Promise<void> {
        try {
          await P_Permissions.create({
            permission_id: roles.permission_id,
            title: roles.title, 
            controller: roles.controller,
            isactive: roles.isactive,
            });
          } catch (error) {
            throw new Error("Failed to create!");
          }
    }
    async update(roles: P_Permissions): Promise<void> {
        try {
            //  find existing users
            const new_parkings = await P_Permissions.findOne({
              where: {
                permission_id: roles.permission_id,
              },
            });
      
            if (!new_parkings) {
              throw new Error("Not found");
            }
            // update
            (new_parkings.title = roles.title),
            (new_parkings.title = roles.controller),
            (new_parkings.isactive = roles.isactive);
      
            await new_parkings.save();
          } catch (error) {
            throw new Error("Failed to update!");
          }
    }
    async getAll(): Promise<P_Permissions[]> {
      try {
          return await P_Permissions.findAll({
            where: { isactive:'Y'},
            attributes:{ exclude:['id','isactive','createdAt','updatedAt']},
            order: [['createdAt', 'DESC']]
          });
        } catch (error) {
          throw new Error("Failed to feacth data by email!");
        }
      }
      async getbyId(permission_id:string): Promise<P_Permissions> {
        try {
          const new_users = await P_Permissions.findOne({
            where: {  isactive:'Y',permission_id: permission_id },
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