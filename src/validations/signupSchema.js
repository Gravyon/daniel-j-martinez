import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  fname: Yup.string("Enter your name")
    .max(50, "Too Long!")
    .min(2, "Too short")
    .required("A name is required"),
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email required"),
  message: Yup.string()
    .min(2, "Too short")
    .max(250, "Too Long!")
    .required("Please leave your feedback"),
});
