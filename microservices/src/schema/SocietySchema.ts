import { z } from "zod";


export const createSocietySchema = z.object({
    body: z.object({
        society_id: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        society_name: z
        .string()
        .min(4, { message: "Society name must be greater than 4 characters!" }),
        address: z
        .string()
        .min(4, { message: "Address name must be greater than 4 characters!" }),
        pincode: z
        .string()
        .min(6, { message: "Pincode must be greater than 6 characters!" }),
        email: z
        .string()
        .email({message:"Email is required"}),
        contact: z
        .string()
        .min(6, { message: "Pincode must be greater than 6 characters!" }),
        isactive: z
        .string()
        .max(1, { message: "Is active must be greater than 6 characters!" }),
    }),
  });

  export const updateSocietySchema = z.object({
    params: z.object({ id: z.string() }),
    body: z
      .object({
        society_name: z
        .string()
        .min(4, { message: "Society name must be greater than 4 characters!" }),
        address: z
        .string()
        .min(4, { message: "Address name must be greater than 4 characters!" }),
        pincode: z
        .string()
        .min(6, { message: "Pincode must be greater than 6 characters!" }),
        email: z
        .string()
        .email({message:"Email is required"}),
        contact: z
        .string()
        .min(6, { message: "Pincode must be greater than 6 characters!" }),
        isactive: z
        .string()
        .max(1, { message: "Is active must be greater than 6 characters!" }),
      })
      .partial(),
  });