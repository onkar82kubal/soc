import { P_Permissions } from "../models/P_Permissions";
import { PermissionRepo } from "../repository/PermissionRepo";
import  ObjectId  from "../utils/ObjectId";



interface IPermissionService {
    create( 
        permission_id: string,
        title: string,
        controller: string,
        isactive: string): Promise<void>;
    update(
        permission_id: string,
        title: string,
        controller: string,
        isactive: string): Promise<void>;
  }


  export class PermissionService implements IPermissionService {

    async create( 
        permission_id: string,
        title: string,
        controller: string,
        isactive: string): Promise<void> {
              
      try {
        const new_notifications = new P_Permissions();
        new_notifications.permission_id = ObjectId.generateObjectId();
        new_notifications.title = title;
        new_notifications.controller = controller;
        new_notifications.isactive = 'Y';
        
        await new PermissionRepo().save(new_notifications);
      } catch (error) {
        throw new Error("Error!");
      }
    }

    async update(
        permission_id: string,
        title: string,
        controller: string,
        isactive: string): Promise<void> {
      try {
        const new_notifications = new P_Permissions();
        new_notifications.permission_id = permission_id;
        new_notifications.title = title;
        new_notifications.controller = controller;
        new_notifications.isactive = isactive;
        await new PermissionRepo().update(new_notifications);
      } catch (error) {
        throw new Error("Error!");
      }
    }

    async getAll() {
        try {
            return await new PermissionRepo().getAll();
          } catch (error) {
            throw new Error("Error!");
          }
    }

    async getbyId(id:string) {
        try {
          return await new PermissionRepo().getbyId(id);
          } catch (error) {
            throw new Error("Error!");
          }
    }

  }