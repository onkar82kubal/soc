import { Parkings } from "../models/Parkings";

interface IParkingRepo {
    save(parkings:Parkings): Promise<void>;
    update(parkings:Parkings): Promise<void>;
    findBySociety(society_id:string): Promise<Parkings[]>;
  }


  export class ParkingRepo implements IParkingRepo {
    async save(parkings: Parkings): Promise<void> {
        try {
          await Parkings.create({
              society_id: parkings.society_id,
              parking_id: parkings.parking_id,
              parking_type: parkings.parking_type,
              in_time: parkings.in_time,
              out_time: parkings.out_time,
              date: parkings.date,
              isactive: parkings.isactive,
            });
          } catch (error) {
            throw new Error("Failed to create!");
          }
    }
    async update(parkings: Parkings): Promise<void> {
        try {
            //  find existing users
            const new_parkings = await Parkings.findOne({
              where: {
                parking_id: Parkings.parking_id,
              },
            });
      
            if (!new_parkings) {
              throw new Error("Not found");
            }
            // update
            (new_parkings.parking_type = parkings.parking_type),
            (new_parkings.in_time = parkings.in_time),
            (new_parkings.out_time = parkings.out_time),
            (new_parkings.date = parkings.date),
            (new_parkings.isactive = parkings.isactive);
      
            await new_parkings.save();
          } catch (error) {
            throw new Error("Failed to update!");
          }
    }
    async findBySociety(society_id:string): Promise<Parkings[]> {
      try {
          return await Parkings.findAll({
            where: { society_id:society_id},
            attributes:{ exclude:['id','createdAt','updatedAt']},
            order: [['createdAt', 'DESC']]
          });
        } catch (error) {
          throw new Error("Failed to feacth data by email!");
        }
      }

  }