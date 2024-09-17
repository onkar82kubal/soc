import { z } from "zod";


export const createParkingSchema = z.object({
    body: z.object({
        parking_id: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        society_id: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        parking_type: z
        .string()
        .max(1, { message: "Is active must be greater than 6 characters!" }),
        in: z
        .string()
        .time({ message: "Invalid time string!" }),
        out: z
        .string()
        .time({ message: "Invalid time string!" }),
        date: z
        .string()
        // .date({ message: "Invalid date string!" }),
        .min(1, { message: "Name must be greater than 1 characters!" }),
        isactive: z
        .string()
        .max(1, { message: "Is active must be greater than 6 characters!" }),
    }),
  });

  export const updateParkingSchema = z.object({
    params: z.object({ id: z.string() }),
    body: z
      .object({
        parking_id: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        society_id: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        parking_type: z
        .string()
        .max(1, { message: "Is active must be greater than 6 characters!" }),
        in: z
        .string()
        .time({ message: "Invalid time string!" }),
        out: z
        .string()
        .time({ message: "Invalid time string!" }),
        date: z
        .string()
        // .date({ message: "Invalid date string!" }),
        .min(1, { message: "Name must be greater than 1 characters!" }),
        isactive: z
        .string()
        .max(1, { message: "Is active must be greater than 6 characters!" }),
      })
      .partial(),
  });