import { z } from "zod";

export const bookCarSchema = z.object({
  nid: z
    .string()
    .min(10, { message: "NID/Passport must be at least 10 digits" })
    .max(20, { message: "NID/Passport cannot exceed 20 digits" })
    .regex(/^\d+$/, { message: "NID/Passport must contain only numbers" }),
  license: z
    .string()
    .min(6, { message: "License must be at least 6 digits" })
    .max(20, { message: "License cannot exceed 20 digits" })
    .regex(/^\d+$/, { message: "License must contain only numbers" }),
  paymentMethod: z
    .string()
    .min(1, { message: "Please select a payment method" }),
  additionalFeature: z
    .array(z.string())
    .min(1, { message: "Please select at least one additional feature" }),
  dropLocation: z.string().min(1, { message: "Please select a drop location" }),
  bookingDate: z
    .date({ required_error: "Please select a booking date" })
    .refine((date) => date >= new Date(), {
      message: "Booking date cannot be in the past",
    }),
});

export const UpdatebookCarSchema = z.object({
  nid: z
    .any()
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val) && val >= 10, {
      message:
        "NID/Passport must be at least 10 digits and cannot exceed 20 digits ",
    }),
  license: z
    .any()
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val) && val >= 6, {
      message:
        "NID/Passport must be at least 6 digits and cannot exceed 20 digits",
    }),
  paymentMethod: z
    .string()
    .min(1, { message: "Please select a payment method" }),
  additionalFeature: z
    .array(z.string())
    .min(1, { message: "Please select at least one additional feature" }),
  dropLocation: z.string().min(1, { message: "Please select a drop location" }),
  bookingDate: z
    .date({ required_error: "Please select a booking date" })
    .refine((date) => date >= new Date(), {
      message: "Booking date cannot be in the past",
    }),
});
