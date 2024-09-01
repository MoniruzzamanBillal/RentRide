import { z } from "zod";

const UpdateCarSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }).optional(),

  description: z
    .string()
    .min(1, { message: "Description is required" })
    .optional(),
  color: z.string().min(1, { message: "Color is required" }).optional(),
  isElectric: z
    .enum(["yes", "no"], {
      invalid_type_error: "Please select an option",
    })
    .optional(),
  features: z
    .array(z.string())
    .nonempty({ message: "At least one feature is required" })
    .optional(),
  dropLocation: z
    .array(z.string())
    .nonempty({ message: "At least one drop location is required" })
    .optional(),
  pricePerHour: z
    .any()
    .transform((value) => parseFloat(value))
    .refine((val) => !isNaN(val) && val > 0, {
      message: "Price per hour must be a positive number",
    })
    .optional(),
});

export default UpdateCarSchema;

// image: z
// .any()
// .refine((file) => file instanceof File && file.size > 0, {
//   message: "Image is required",
// }).optional()
