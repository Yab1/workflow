import { object, string } from "yup";

const signInSchema = object({
  email: string().required("Email is required").email("Invalid email format"),
  password: string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters"),
});

export default signInSchema;
