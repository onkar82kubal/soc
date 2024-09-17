import { z } from "zod";


export const createRoleSchema = z.object({
    body: z.object({
        role_id: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        title: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        description: z
        .string()
        .min(1, { message: "Is active must be greater than 1 characters!" }),
        device_type: z
        .string()
        .min(1, { message: "Is active must be greater than 1 characters!" }),
        isactive: z
        .string()
        .max(1, { message: "Is active must be greater than 1 characters!" }),
    }),
  });

  export const updateRoleSchema = z.object({
    params: z.object({ id: z.string() }),
    body: z
      .object({
        role_id: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        title: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        description: z
        .string()
        .min(1, { message: "Is active must be greater than 1 characters!" }),
        device_type: z
        .string()
        .min(1, { message: "Is active must be greater than 1 characters!" }),
        isactive: z
        .string()
        .max(1, { message: "Is active must be greater than 1 characters!" }),
      })
      .partial(),
  });