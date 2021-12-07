import { useFormik, FormikProps } from "formik";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { FormValues } from "./types";
import Signup from "./Signup";

import { requestSignup } from "../../utils/apis/signup";
import { signupValidator } from "../../utils/yups/signup";

const SignupContainer = () => {
  const history = useHistory();
  const mutation = useMutation((values: FormValues) => requestSignup(values), {
    onSuccess: () => {
      // TODO: 성공했을 경우 회원가입이 완료되었습니다. 문구를 Toast로 띄워 사용자에게 알려준다.
      alert("회원가입이 완료되었습니다.");
      history.push("/");
    },
    onError: (error) => {
      // TODO: 에러가 발생할 경우 Toast를 띄워 사용자에게 알려준다.
      alert(error);
    },
  });
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
    validationSchema: signupValidator,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      // TODO: 추후 API 호출 로직 작성필요
      console.log(values);
      // requestSignup(values);
      mutation.mutate(values);
      setSubmitting(false);
    },
  });

  return <Signup formik={formik} />;
};

export default SignupContainer;
