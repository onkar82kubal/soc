import { z } from "zod";


export const createPropertyDetailSchema = z.object({
    body: z.object({
        society_id: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        property_number: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        type: z
        .string()
        .min(1, { message: "Is active must be greater than 1 characters!" }),
        configuration: z
        .string()
        .min(1, { message: "Is active must be greater than 1 characters!" }),
        size: z
        .string()
        .min(1, { message: "Is active must be greater than 1 characters!" }),
        area: z
        .string()
        .min(1, { message: "Is active must be greater than 1 characters!" }),
    }),
  });

  export const updatePropertyDetailSchema = z.object({
    params: z.object({ id: z.string() }),
    body: z
      .object({
        property_id: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        society_id: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        property_number: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        type: z
        .string()
        .min(1, { message: "Is active must be greater than 1 characters!" }),
        configuration: z
        .string()
        .min(1, { message: "Is active must be greater than 1 characters!" }),
        size: z
        .string()
        .min(1, { message: "Is active must be greater than 1 characters!" }),
        area: z
        .string()
        .min(1, { message: "Is active must be greater than 1 characters!" }),
        isactive: z
        .string()
        .max(1, { message: "Is active must be greater than 1 characters!" }),
      })
      .partial(),
  });