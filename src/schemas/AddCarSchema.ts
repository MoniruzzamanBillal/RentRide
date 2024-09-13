import { z } from "zod";

const addCarValidationSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  image: z.any().refine((file) => file instanceof File && file.size > 0, {
    message: "Image is required",
  }),
  description: z.string().min(1, { message: "Description is required" }),
  color: z.string().min(1, { message: "Color is required" }),
  isElectric: z.enum(["yes", "no"], {
    invalid_type_error: "Please select an option",
  }),
  features: z
    .array(z.string())
    .nonempty({ message: "At least one feature is required" }),
  dropLocation: z
    .array(z.string())
    .nonempty({ message: "At least one drop location is required" }),
  pricePerHour: z
    .string()
    .transform((value) => parseFloat(value))
    .refine((val) => !isNaN(val) && val > 0, {
      message: "Price per hour must be a positive number",
    }),
});

export default addCarValidationSchema;
