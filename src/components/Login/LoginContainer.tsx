import { useFormik, FormikProps } from "formik";
import { useHistory } from "react-router-dom";
import { useMutation } from "react-query";
import { useSetRecoilState } from "recoil";
import { FormValues } from "./types";
import { requestLogin } from "../../utils/apis";
import { loginValidator } from "../../utils/yups/login";
import { MutationData, MutationError } from "../../types/commonTypes";
import { login } from "../../constants";
import Login from "./Login";
import { useLocalStorage } from "../../hooks";
import { authState } from "../../atoms/auth";
import useCustomToast from "../../hooks/useCustomToast";

const LoginContainer = () => {
  const history = useHistory();

  const [toast] = useCustomToast();

  const setAuthState = useSetRecoilState(authState);
  const [, setToken] = useLocalStorage(login.localStorageKey.TOKEN, "");

  const handleGuestLogin = () => {
    setToken("GUEST");
    setAuthState(() => "GUEST");
    toast({ message: `게스트 사용자님 환영합니다 😁` });
    history.push("/");
  };

  const { mutate } = useMutation<MutationData, MutationError, unknown, unknown>(
    (values: FormValues) => requestLogin(values),
    {
      onSuccess: ({ data }) => {
        setToken(data.data.token);
        setAuthState(data.data.token);
        history.push("/");
        toast({ message: `환영합니다 😁` });
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

  return <Login formik={formik} onGuestLogin={handleGuestLogin} />;
};

export default LoginContainer;
