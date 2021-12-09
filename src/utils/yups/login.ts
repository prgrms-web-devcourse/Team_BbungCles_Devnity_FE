import * as Yup from "yup";
import login from "../constants/login";

export const loginValidator = Yup.object({
  email: Yup.string()
    .email(login.message.EMAIL_FORMAT_VALIDATION)
    .required(login.message.EMAIL_REQUIRED_VALIDATION),
  password: Yup.string().required(login.message.PASSWORD_REQUIRED_VALIDATION),
});
