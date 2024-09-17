import { z } from "zod";


export const createSchema = z.object({
    body: z.object({
        owner_id: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        role_id: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        society_id: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        property_id: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        firstname: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        lastname: z
        .string()
        .min(1, { message: "Is active must be greater than 1 characters!" }),
        mobile: z
        .string()
        .min(1, { message: "Is active must be greater than 1 characters!" }),
        landline: z
        .string()
        .min(1, { message: "Is active must be greater than 1 characters!" }),
        password: z
        .string()
        .min(1, { message: "Is active must be greater than 1 characters!" }),
        on_rent: z
        .string()
        .min(1, { message: "Is active must be greater than 1 characters!" }),
        isactive: z
        .string()
        .max(1, { message: "Is active must be greater than 1 characters!" }),
    }),
  });

  export const updatechema = z.object({
    params: z.object({ id: z.string() }),
    body: z
      .object({
        owner_id: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        role_id: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        society_id: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        property_id: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        firstname: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        lastname: z
        .string()
        .min(1, { message: "Is active must be greater than 1 characters!" }),
        mobile: z
        .string()
        .min(1, { message: "Is active must be greater than 1 characters!" }),
        landline: z
        .string()
        .min(1, { message: "Is active must be greater than 1 characters!" }),
        password: z
        .string()
        .min(1, { message: "Is active must be greater than 1 characters!" }),
        on_rent: z
        .string()
        .min(1, { message: "Is active must be greater than 1 characters!" }),
        isactive: z
        .string()
        .max(1, { message: "Is active must be greater than 1 characters!" }),
      })
      .partial(),
  });