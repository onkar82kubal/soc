import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import speakeasy from "speakeasy";
import * as dotenv from "dotenv";

interface Payload {
  // userId: number;
  // email: string;
  // name: string;
  // username: string;
  // // society_id: string;
  owner_id: string;
  role_id: string;
  society_id: string;
  property_id: string;
  firstname: string;
  lastname: string;
  mobile: string;
  landline: string;
  email: string;
  on_rent: string;
}
dotenv.config();
const secret = speakeasy.generateSecret({length: 20});

class Authentication {
  
  public static passwordHash(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  public static async passwordCompare(
    text: string,
    encryptedText: string
  ): Promise<boolean> {
    return await bcrypt.compare(text, encryptedText);
  }

  public static generateToken(
    owner_id: string,
    role_id: string,
    society_id: string,
    property_id: string,
    firstname: string,
    lastname: string,
    mobile: string,
    landline: string,
    email: string,
    on_rent: string
  ): object {
    const payload: Payload = {
      owner_id: owner_id,
      role_id: role_id,
      society_id: society_id,
      property_id: property_id,
      firstname: firstname,
      lastname: lastname,
      mobile: mobile,
      landline: landline,
      email: email,
      on_rent: on_rent
      };
    const PRIVATE_KEY : string = process.env.JWT_SECRET_KEY || "my-secret";
    const accessToken : string = jwt.sign(payload, PRIVATE_KEY , { expiresIn: process.env.JWT_EXPIRES_IN });
    const REFRESH_PRIVATE_KEY : string = process.env.JWT_Refresh_KEY || "my-secret";
    const refreshToken  : string = jwt.sign(payload, REFRESH_PRIVATE_KEY , { expiresIn: process.env.JWT_RefreshToken_EXPIRES_IN });
    return { 'accessToken':accessToken, 'refreshToken':refreshToken };
  }

  public static validateToken(token: string): Payload | null {
    try {
      const accessToken : string = process.env.JWT_SECRET_KEY || "my-secret";
      return jwt.verify(token, accessToken ) as Payload;
    } catch (err) {
      return null;
    }
  }

  public static validaterefreshToken(refreshToken: string): Payload | null {
    try {
      const REFRESH_PRIVATE_KEY : string = process.env.JWT_Refresh_KEY || "my-secret";
      return jwt.verify(refreshToken, REFRESH_PRIVATE_KEY ) as Payload;
    } catch (err) {
      return null;
    }
  }

  public static generateOTPCode(){
    try {
      return speakeasy.totp({
        secret: secret.base32,
        encoding: 'base32',
        step:60,
      });
    } catch (err) {
      return null;
    }
  }

  public static verifyOTPCode(otp:string){
    try {
    return speakeasy.totp.verify({
      secret: secret.base32,
      encoding: 'base32',
      window: 2,
      step: 60,
      token: otp,
    });
  } catch (err) {
    return null;
  }
  }
}

export default Authentication