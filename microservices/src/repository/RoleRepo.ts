import { Roles } from "../models/Roles";

interface IRoleRepoRepo {
    save(roles:Roles): Promise<void>;
    update(roles:Roles): Promise<void>;
    getRole(): Promise<Roles[]>;
  }


  export class RoleRepo implements IRoleRepoRepo {
    async save(roles: Roles): Promise<void> {
        try {
          await Roles.create({
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
    async update(roles: Roles): Promise<void> {
        try {
            //  find existing users
            const new_parkings = await Roles.findOne({
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
    async getRole(): Promise<Roles[]> {
      try {
          return await Roles.findAll({
            where: { isactive:'Y'},
            attributes:{ exclude:['id','isactive','createdAt','updatedAt']},
            order: [['createdAt', 'DESC']]
          });
        } catch (error) {
          throw new Error("Failed to feacth data by email!");
        }
      }

  }