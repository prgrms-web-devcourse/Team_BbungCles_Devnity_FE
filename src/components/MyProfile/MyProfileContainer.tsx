import { ChangeEvent, useCallback } from "react";
import { useMutation, useQuery } from "react-query";
import { FormikProps, useFormik } from "formik";
import { requestGetMyProfile } from "../../utils/apis";
import MyProfile from "./MyProfile";
import { FormValues, QueryData, QueryError } from "./types";
import { errorCode, login } from "../../constants";
import { useLocalStorage } from "../../hooks";
import {
  requestProfileImage,
  requestPutMyProfile,
} from "../../utils/apis/myProfile";
import { initialValues } from "./formik";

const MyProfileContainer = () => {
  const [, setToken] = useLocalStorage(login.localStorageKey.TOKEN, "");
  const formik: FormikProps<FormValues> = useFormik<FormValues>({
    initialValues,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      // TODO: eslintno-use-before-define lint -> profileInformationMutation 는 아래 선언되어 있는데, profileInformationMutation 에서 formik을 바라보고 있음
      // eslint-disable-next-line
      profileInformationMutation.mutate(values);
      setSubmitting(false);
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
        alert(errorMessage);
      },
      retry: false,
    }
  );
  // 프로필 이미지 수정 API
  const profileImageMutation = useMutation(
    (imageFile: File) => requestProfileImage(imageFile),
    {
      onSuccess: ({ data }) => {
        if (data.statusCode === errorCode.OK) {
          formik.setFieldValue("profileImgUrl", data.data.imageUrl);
        }
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
  // 내 프로필 수정 API
  const profileInformationMutation = useMutation(
    (values: FormValues) => requestPutMyProfile(values),
    {
      onSuccess: ({ data }) => {
        if (data.statusCode === errorCode.OK) {
          // TODO: toast가 완성될 경우 alert는 지운다.
          // eslint-disable-next-line no-alert
          alert("변경이 완료되었습니다.");
        }
      },
      onError: ({ response }) => {
        const errorMessage = response
          ? response.data.message
          : login.message.UNKNOWN_ERROR;

        if (response.status === errorCode.UNAUTHORIZED) {
          setToken("");
        }
        // TODO: 에러가 발생할 경우 Toast를 띄워 사용자에게 알려준다. Toast가 완성될 경우 alert는 지운다.
        // eslint-disable-next-line no-alert
        alert(errorMessage);
      },
    }
  );

  const handleImageChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files[0];

      profileImageMutation.mutate(file);
    },
    [profileImageMutation]
  );

  return <MyProfile formik={formik} handleImageChange={handleImageChange} />;
};

export default MyProfileContainer;
