import { z } from "zod";


export const createUserSchema = z.object({
    body: z.object({
        name: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        username: z
        .string()
        .min(4, { message: "Username must be greater than 4 characters!" }),
        email: z
        .string()
        .email({message:"Email is required"}),
        // .refine(async (e) => {
        //     // Where checkIfEmailIsValid makes a request to the backend
        //     // to see if the email is valid.
        //     return await checkIfEmailIsValid(e);
        //   }, "This email is not in our database"),
        password: z
        .string()
        .min(6, { message: "Password must be greater than 6 characters!" }),
    }),
  });

  export const loginUserSchema = z.object({
    body: z.object({
        email: z
        .string()
        .email({message:"Email is required"}),
        password: z
        .string()
        .min(6, { message: "Password must be greater than 6 characters!" }),
    }),
  })