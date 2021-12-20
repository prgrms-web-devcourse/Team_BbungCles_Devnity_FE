import { useFormik, FormikProps } from "formik";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { FormValues } from "./types";
import { MutationData, MutationError } from "../../types/commonTypes";
import { requestSignup } from "../../utils/apis";
import { signupValidator } from "../../utils/yups/signup";
import { routes, signup } from "../../constants";
import Signup from "./Signup";
import useCustomToast from "../../hooks/useCustomToast";

const SignupContainer = () => {
  const history = useHistory();

  const [toast] = useCustomToast();

  const { mutate } = useMutation<MutationData, MutationError, unknown, unknown>(
    (values: FormValues) => requestSignup(values),
    {
      onSuccess: () => {
        toast({ message: signup.message.COMPLETED_SIGNUP });
        history.push(routes.LOGIN);
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
