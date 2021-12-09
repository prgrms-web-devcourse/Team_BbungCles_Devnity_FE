import { useFormik, FormikProps } from "formik";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { FormValues } from "./types";
import { MutationData, MutationError } from "../../types/commonTypes";
import { requestSignup } from "../../utils/apis";
import { signupValidator } from "../../utils/yups/signup";
import { signup } from "../../constants";
import Signup from "./Signup";

const SignupContainer = () => {
  const history = useHistory();
  const { mutate } = useMutation<MutationData, MutationError, unknown, unknown>(
    (values: FormValues) => requestSignup(values),
    {
      onSuccess: () => {
        // TODO: 성공했을 경우 '회원가입이 완료되었습니다.' 문구를 Toast로 띄워 사용자에게 알려준다. Toast가 완성될 경우 alert는 지운다.
        // eslint-disable-next-line no-alert
        alert(signup.message.COMPLETED_SIGNUP);
        history.push("/login");
      },
      // https://github.com/tannerlinsley/react-query/discussions/1385
      onError: ({ response }) => {
        const errorMessage = response
          ? response.data.message
          : signup.message.UNKNOWN_ERROR;
        // TODO: 에러가 발생할 경우 Toast를 띄워 사용자에게 알려준다. Toast가 완성될 경우 alert는 지운다.
        // eslint-disable-next-line no-alert
        alert(errorMessage);
      },
    }
  );
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
      mutate(values);
      setSubmitting(false);
    },
  });

  return <Signup formik={formik} />;
};

export default SignupContainer;
