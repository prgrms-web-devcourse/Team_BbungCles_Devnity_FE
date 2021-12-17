import * as Yup from "yup";
import { signup } from "../../constants";

export const signupValidator = Yup.object({
  name: Yup.string()
    .min(
      signup.validation.NAME_MIN_LENGTH,
      `이름은 최소 ${signup.validation.NAME_MIN_LENGTH}자 이상 입력해 주세요`
    )
    .max(
      signup.validation.NAME_MAX_LENGTH,
      `이름은 ${signup.validation.NAME_MAX_LENGTH}자를 넘을 수 없습니다`
    )
    .matches(/^[가-힣|a-z|A-Z]+$/gi, signup.message.ALLOW_KOREAN_ENGLISH)
    .required(signup.message.NAME_REQUIRED_VALIDATION),
  email: Yup.string()
    .min(
      signup.validation.EMAIL_MIN_LENGTH,
      `이메일은 최소 ${signup.validation.EMAIL_MIN_LENGTH}자 이상 입력해 주세요`
    )
    .max(
      signup.validation.EMAIL_MAX_LENGTH,
      `이메일은 ${signup.validation.EMAIL_MAX_LENGTH}자를 넘을 수 없습니다`
    )
    .email(signup.message.EMAIL_FORMAT_VALIDATION)
    .required(signup.message.EMAIL_REQUIRED_VALIDATION),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()\\[\]_+;:'"?<>,.|\\/])[A-Za-z\d!@#$%^&*()\\[\]_+;:'"?<>,.|\\/]{8,20}$/g,
      `비밀번호는 8~20자리의 숫자, 영문자, 특수문자를 최소 1개씩 포함해야 합니다.`
    )
    .required(signup.message.PASSWORD_REQUIRED_VALIDATION),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), null],
      signup.message.INCORRECT_PASSWORD_VALIDATION
    )
    .required(signup.message.CONFIRM_PASSWORD_REQUIRED_VALIDATION),
  course: Yup.string().required(signup.message.COURSE_REQUIRED_VALIDATION),
  generation: Yup.number().required(
    signup.message.GENERATION_REQUIRED_VALIDATION
  ),
  role: Yup.string().required(signup.message.ROLE_REQUIRED_VALIDATION),
});
