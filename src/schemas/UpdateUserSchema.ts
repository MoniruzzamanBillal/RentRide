import { z } from "zod";

const UpdateUserSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(50, "Name must be less than 50 characters")
    .optional(),
  email: z.string().email("Invalid email address").optional(),
  phone: z
    .string()
    .regex(/^\d+$/, "Phone number must be numeric")
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number can't exceed 15 digits")
    .optional(),
});

export default UpdateUserSchema;
