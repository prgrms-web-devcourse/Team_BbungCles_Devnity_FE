import { useFormik, FormikProps } from "formik";
import { useHistory } from "react-router-dom";
import { useMutation } from "react-query";
import { FormValues } from "./types";
import { requestLogin } from "../../utils/apis";
import { loginValidator } from "../../utils/yups/login";
import { MutationData, MutationError } from "../../types/commonTypes";
import { login } from "../../constants";
import Login from "./Login";
import { useLocalStorage } from "../../hooks";

const LoginContainer = () => {
  const history = useHistory();
  const [, setToken] = useLocalStorage(login.localStorageKey.TOKEN, "");
  const { mutate } = useMutation<MutationData, MutationError, unknown, unknown>(
    (values: FormValues) => requestLogin(values),
    {
      onSuccess: ({ data }) => {
        setToken(data.data.token);
        history.push("/");
      },
      onError: ({ response }) => {
        const errorMessage = response
          ? response.data.message
          : login.message.UNKNOWN_ERROR;
        // TODO: 에러가 발생할 경우 Toast를 띄워 사용자에게 알려준다. Toast가 완성될 경우 alert는 지운다.
        // eslint-disable-next-line no-alert
        alert(errorMessage);
      },
    }
  );
  const formik: FormikProps<FormValues> = useFormik<FormValues>({
    initialValues: { email: "", password: "" },
    validationSchema: loginValidator,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      mutate(values);
      setSubmitting(false);
    },
  });

  return <Login formik={formik} />;
};

export default LoginContainer;
