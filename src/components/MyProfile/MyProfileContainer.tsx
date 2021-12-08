import { useFormik, FormikProps } from "formik";
import MyProfile from "./MyProfile";
import { FormValues } from "./types";

const MyProfileContainer = () => {
  const formik: FormikProps<FormValues> = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      course: "",
      generation: null,
      role: "",
      profileImgUrl: "",
      mbti: "",
      blogUrl: "",
      githubUrl: "",
      summary: "",
      latitude: null,
      longitude: null,
      description: "",
    },
    onSubmit: (values) => {
      // TODO: 추후 API 연동되면 console.log 지울 것
      // eslint-disable-next-line no-console
      console.log(values);
    },
  });

  return <MyProfile formik={formik} />;
};

export default MyProfileContainer;
