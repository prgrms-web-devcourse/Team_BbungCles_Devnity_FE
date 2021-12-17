import * as Yup from "yup";
import { login } from "../../constants";

export const loginValidator = Yup.object({
  email: Yup.string()
    .email(login.message.EMAIL_FORMAT_VALIDATION)
    .required(login.message.EMAIL_REQUIRED_VALIDATION),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()\\[\]_+;:'"?<>,.|\\/])[A-Za-z\d!@#$%^&*()\\[\]_+;:'"?<>,.|\\/]{8,20}$/g,
      `비밀번호는 8~20자리의 숫자, 영문자, 특수문자를 최소 1개씩 포함해야 합니다.`
    )
    .required(login.message.PASSWORD_REQUIRED_VALIDATION),
});
