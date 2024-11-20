import { z } from "zod";


export const create = z.object({
    body: z.object({
        user_id: z
        .string()
        .min(1, { message: "User Id must be greater than 1 characters!" }),
        role_id: z
        .string()
        .min(1, { message: "Role must be greater than 1 characters!" }),
    }),
  });

  export const update = z.object({
    params: z.object({ user_id: z.string() }),
    body: z
      .object({
        role_id: z
        .string()
        .min(1, { message: "Role must be greater than 1 characters!" }),
      })
      .partial(),
  });