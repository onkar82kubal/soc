import { z } from "zod";


export const createEmailSchema = z.object({
    body: z.object({
        email_id: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        society_id: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        from_email: z
        .string()
        .email({message:"Email is required"}),
        to_email: z
        .string()
        .email({message:"Email is required"}),
        content: z
        .string()
        .min(6, { message: "Content must be greater than 6 characters!" }),
        is_read: z
        .string()
        .max(1, { message: "Is active must be greater than 6 characters!" }),
        isactive: z
        .string()
        .max(1, { message: "Is active must be greater than 6 characters!" }),
    }),
  });

  export const updateEmailSchema = z.object({
    params: z.object({ id: z.string() }),
    body: z
      .object({
        email_id: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        is_read: z
        .string()
        .max(1, { message: "Is active must be greater than 6 characters!" }),
        isactive: z
        .string()
        .max(1, { message: "Is active must be greater than 6 characters!" }),
      })
      .partial(),
  });