import { useFormik, FormikProps } from "formik";
import * as Yup from "yup";
import Login from "./Login";
import { FormValues } from "./types";
import { login } from "../../utils/constants";

const LoginContainer = () => {
  const formik: FormikProps<FormValues> = useFormik<FormValues>({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(login.message.EMAIL_FORMAT_VALIDATION)
        .required(login.message.EMAIL_REQUIRED_VALIDATION),
      password: Yup.string().required(
        login.message.PASSWORD_REQUIRED_VALIDATION
      ),
    }),
    onSubmit: (values) => {
      // TODO: 추후 API 호출 로직 작성필요
      console.log(values);
    },
  });

  return <Login formik={formik} />;
};

export default LoginContainer;
