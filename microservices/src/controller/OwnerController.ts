import { Request, Response } from "express";
import { OwnerService } from "../service/Owner";


class OwnerController {

    async create(req: Request, res: Response) {  
        try {
            const { 
                role_id,
                society_id,
                property_id,
                firstname,
                lastname,
                mobile,
                landline,
                email,
                password,
                on_rent,
                isactive } = req.body;
            await new OwnerService().create(
                role_id,
                society_id,
                property_id,
                firstname,
                lastname,
                mobile,
                landline,
                email,
                password,
                on_rent, 
            );
      
            return res.status(200).json({
              status: "Ok!",
              message: "Successful!",
            });
          } catch (error) {
            return res.status(500).json({
              status: "Internal server Error!",
              message: "Internal server Error!",
            });
          }
      }
    
      async update(req: Request, res: Response) {
        try {
            const {
                owner_id,
                role_id,
                society_id,
                property_id,
                firstname,
                lastname,
                mobile,
                landline,
                email,
                password,
                on_rent,
                isactive,  } = req.body;
      
            await new OwnerService().update(
                owner_id,
                role_id,
                society_id,
                property_id,
                firstname,
                lastname,
                mobile,
                landline,
                email,
                password,
                on_rent,
                isactive, 
            );
      
            return res.status(200).json({
              status: "Ok!",
              message: "Successful!",
            });
          } catch (error) {
            return res.status(500).json({
              status: "Internal server Error!",
              message: "Internal server Error!",
            });
          }
      }
      async get(req: Request, res: Response) {
        try {
          let society_id ='66d8cf5027e4be6354b9c1c2'
          const new_note = await new OwnerService().get();
          res.status(200).json({
            status: "Ok!",
            message: "Successfully fetched",
            data: new_note,
          });
        } catch (err) {
          res.status(500).json({
            status: "Internal Server Error!",
            message: "Internal Server Error!",
          });
        }
      }
      async getById(req: Request, res: Response) {
        try {
          let society_id ='66d8cf5027e4be6354b9c1c2'
          const { owner_id } = req.body;
          const new_note = await new OwnerService().getById(society_id,owner_id);
          res.status(200).json({
            status: "Ok!",
            message: "Successfully fetched",
            data: new_note,
          });
        } catch (err) {
          res.status(500).json({
            status: "Internal Server Error!",
            message: "Internal Server Error!",
          });
        }
      }
      async login(req: Request, res: Response) {
        try {
          const { email, password } = req.body;
          const token = await new OwnerService().login(email, password);
          if (Object.keys(token).length === 0) {
            return res.status(400).json({
              status: "Bad Request!",
              message: "Wrong email or password!",
            });
          }
          const res_token = token;
          return res.status(200).json({
            status: "Ok!",
            message: "Successfully login!",
            result: res_token,
          });
        } catch (error) {
          return res.status(500).json({
            status: "Internal server Error!",
            message: "Internal server Error!",
          });
        }
      }
      
      async generateOTP(req: Request, res: Response){
        try {
          const { mobile } = req.body;
          const otp = await new OwnerService().generateOTP();
        return res.status(200).json({
          status: "Ok!",
          message: "Successfully registerd users!",
          otp: otp
        });
        } catch (error) {
          return res.status(500).json({
            status: "Internal server Error!",
            message: "Internal server Error!",
          });
        }
      }
    
      async verifyOTP(req: Request, res: Response){
        try {
        const { otp,mobile } = req.body;
        let otpStatus = await new OwnerService().verifyOTP(otp)
        if(otpStatus){
          const token = await new OwnerService().loginmobile(mobile);
          if (Object.keys(token).length === 0) {
            return res.status(400).json({
              status: "Bad Request!",
              message: "Wrong email or password!",
            });
          }
          const res_token = token;
          return res.status(200).json({
            status: "Ok!",
            message: "Successfully login!",
            result: res_token,
          });
        } else {
          return res.status(500).json({
            status: "Internal server Error!",
            message: "Internal server Error!",
          });
        }
      } catch (error) {
        return res.status(500).json({
          status: "Internal server Error!",
          message: "Internal server Error!",
        });
      }
      }

}

export default new OwnerController()