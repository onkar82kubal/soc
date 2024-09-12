import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import speakeasy from "speakeasy";
import * as dotenv from "dotenv";

interface Payload {
  userId: number;
  email: string;
  name: string;
  username: string;
  // society_id: string;
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
    id: number,
    email: string,
    name: string,
    username: string,
    // society_id: string,
  ): string {
    const secretKey: string = process.env.JWT_SECRET_KEY || "my-secret";
    const payload: Payload = {
      userId: id,
      email: email,
      name: name,
      username: username,
      // society_id:society_id
    };
    const option = { expiresIn: process.env.JWT_EXPIRES_IN };

    return jwt.sign(payload, secretKey, option);
  }

  public static validateToken(token: string): Payload | null {
    try {
      const secretKey: string = process.env.JWT_SECRET_KEY || "my-secret";
      return jwt.verify(token, secretKey) as Payload;
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