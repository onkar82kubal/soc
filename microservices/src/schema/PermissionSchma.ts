import { z } from "zod";


export const createSchema = z.object({
    body: z.object({
        permission_id: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        title: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        controller: z
        .string()
        .min(1, { message: "Is active must be greater than 1 characters!" }),
        isactive: z
        .string()
        .max(1, { message: "Is active must be greater than 1 characters!" }),
    }),
  });

  export const updateSchema = z.object({
    params: z.object({ id: z.string() }),
    body: z
      .object({
        permission_id: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        title: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        controller: z
        .string()
        .min(1, { message: "Is active must be greater than 1 characters!" }),
        isactive: z
        .string()
        .max(1, { message: "Is active must be greater than 1 characters!" }),
      })
      .partial(),
  });