import { useFormik, FormikProps } from "formik";
import * as Yup from "yup";
import { FormValues } from "./types";
import Signup from "./Signup";
import { signup } from "../../utils/constants";

const SignupContainer = () => {
  const formik: FormikProps<FormValues> = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      course: "",
      generation: "",
      role: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(signup.message.NAME_REQUIRED_VALIDATION),
      email: Yup.string()
        .email(signup.message.EMAIL_FORMAT_VALIDATION)
        .required(signup.message.EMAIL_REQUIRED_VALIDATION),
      password: Yup.string().required(
        signup.message.PASSWORD_REQUIRED_VALIDATION
      ),
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
    }),
    onSubmit: (values) => {
      // TODO: 추후 API 호출 로직 작성필요
      console.log(values);
    },
  });

  return <Signup formik={formik} />;
};

export default SignupContainer;
