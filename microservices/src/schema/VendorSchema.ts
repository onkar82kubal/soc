import { z } from "zod";


export const createVendorSchema = z.object({
    body: z.object({
        vendor_id: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        society_id: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        name: z
        .string()
        .max(1, { message: "Is active must be greater than 6 characters!" }),
        address: z
        .string()
        .max(1, { message: "Is active must be greater than 6 characters!" }),
        email: z
        .string()
        .email({message:"Email is required"}),
        specialisation: z
        .string()
        .max(1, { message: "Is active must be greater than 6 characters!" }),
        isactive: z
        .string()
        .max(1, { message: "Is active must be greater than 6 characters!" }),
    }),
  });

  export const updateVendorSchema = z.object({
    params: z.object({ id: z.string() }),
    body: z
      .object({
        vendor_id: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        society_id: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        name: z
        .string()
        .max(1, { message: "Is active must be greater than 6 characters!" }),
        address: z
        .string()
        .max(1, { message: "Is active must be greater than 6 characters!" }),
        email: z
        .string()
        .email({message:"Email is required"}),
        specialisation: z
        .string()
        .max(1, { message: "Is active must be greater than 6 characters!" }),
        isactive: z
        .string()
        .max(1, { message: "Is active must be greater than 6 characters!" }),
      })
      .partial(),
  });