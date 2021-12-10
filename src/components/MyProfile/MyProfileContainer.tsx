import { useFormik, FormikProps } from "formik";
import { ChangeEvent, useCallback, useState } from "react";
import { useQuery } from "react-query";
import { requestGetMyProfile } from "../../utils/apis";
import MyProfile from "./MyProfile";
import { FormValues, QueryData, QueryError } from "./types";
import { errorCode, login } from "../../constants";
import { useLocalStorage } from "../../hooks";

const MyProfileContainer = () => {
  const [base64Image, setBase64Image] = useState<string>("");
  const [, setToken] = useLocalStorage(login.localStorageKey.TOKEN, "");
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
      // description: "",
    },
    onSubmit: (values) => {
      // TODO: 추후 API 연동되면 console.log 지울 것
      // eslint-disable-next-line no-console
      console.log(values);
    },
  });

  useQuery<unknown, QueryError, QueryData, string>(
    "myProfile",
    () => requestGetMyProfile(),
    {
      onSuccess: ({ data }) => {
        formik.setValues({ ...data.data.user, ...data.data.introduction });
      },
      onError: ({ response }) => {
        const errorMessage = response
          ? response.data.message
          : login.message.UNKNOWN_ERROR;

        if (
          response === undefined ||
          response?.status === errorCode.UNAUTHORIZED ||
          response?.status === errorCode.FORBIDDEN
        ) {
          setToken("");
        }

        // TODO: 에러가 발생할 경우 Toast를 띄워 사용자에게 알려준다.
        // eslint-disable-next-line
        console.log(errorMessage);
      },
      retry: false,
    }
  );

  const handleImageChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const result = reader.result as string;
        setBase64Image(result);
        formik.setFieldValue("profileImgUrl", result);
      };
      reader.readAsDataURL(file);
    },
    [formik]
  );

  return (
    <MyProfile
      formik={formik}
      handleImageChange={handleImageChange}
      image={base64Image}
    />
  );
};

export default MyProfileContainer;
