import { ChangeEvent, useCallback, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { FormikProps, useFormik } from "formik";
import { useRecoilValue } from "recoil";
import { requestGetMyProfile } from "../../utils/apis";
import MyProfile from "./MyProfile";
import { FormValues, QueryData, QueryError } from "./types";
import { Position, MutationData, MutationError } from "../../types/commonTypes";
import { errorCode } from "../../constants";
import {
  requestProfileImage,
  requestPutMyProfile,
} from "../../utils/apis/myProfile";
import { initialValues } from "./formik";
import useToastUi from "../../hooks/useToastUi";
import useCustomToast from "../../hooks/useCustomToast";
import { authState } from "../../atoms/auth";

const MyProfileContainer = () => {
  const [toast] = useCustomToast();

  const [editorRef] = useToastUi();

  const queryClient = useQueryClient();

  const auth = useRecoilValue(authState);

  const [mapCenterPosition, setMapCenterPosition] = useState<Position | null>(
    null
  );

  const [userClickPosition, setUserClickPosition] = useState<Position | null>(
    null
  );

  const formik: FormikProps<FormValues> = useFormik<FormValues>({
    initialValues,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      // TODO: eslintno-use-before-define lint -> profileInformationMutation 는 아래 선언되어 있는데, profileInformationMutation 에서 formik을 바라보고 있음
      // eslint-disable-next-line
      profileInformationMutation.mutate({
        ...values,
        latitude: userClickPosition.lat,
        longitude: userClickPosition.lng,
      });
      setSubmitting(false);
    },
  });

  if (auth !== "GUEST") {
    useQuery<unknown, QueryError, QueryData, string>(
      "myProfile",
      () => requestGetMyProfile(),
      {
        onSuccess: ({ data }) => {
          if (data?.statusCode === errorCode.OK) {
            formik.setValues({ ...data.data.user, ...data.data.introduction });
            setUserClickPosition({
              lat: data.data.introduction.latitude,
              lng: data.data.introduction.longitude,
            });
            editorRef.current
              ?.getInstance()
              .setMarkdown(data.data.introduction.description);
            if (
              data.data.introduction.latitude &&
              data.data.introduction.longitude
            ) {
              setMapCenterPosition({
                lat: data.data.introduction.latitude,
                lng: data.data.introduction.longitude,
              });
            }
          }
        },
        retry: false,
      }
    );
  }

  // 프로필 이미지 수정 API
  const profileImageMutation = useMutation<
    MutationData,
    MutationError,
    unknown,
    unknown
  >((imageFile: File) => requestProfileImage(imageFile), {
    onSuccess: ({ data }) => {
      if (data.statusCode === errorCode.OK) {
        formik.setFieldValue("profileImgUrl", data.data.imageUrl);
      }
    },
  });

  const profileInformationMutation = useMutation<
    MutationData,
    MutationError,
    unknown,
    unknown
  >((values: FormValues) => requestPutMyProfile(values), {
    onSuccess: ({ data }) => {
      if (data.statusCode === errorCode.OK) {
        queryClient.invalidateQueries("globalMyProfile");
        toast({ message: "변경이 완료되었습니다." });
      }
    },
  });

  const handleImageChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files[0];

      profileImageMutation.mutate(file);
    },
    [profileImageMutation]
  );

  const handleMapClick = useCallback((target, mouseEvent) => {
    setUserClickPosition({
      lat: mouseEvent.latLng.getLat(),
      lng: mouseEvent.latLng.getLng(),
    });
  }, []);

  return (
    <MyProfile
      formik={formik}
      handleImageChange={handleImageChange}
      handleMapClick={handleMapClick}
      userClickPosition={userClickPosition}
      mapCenterPosition={mapCenterPosition}
      editorRef={editorRef}
    />
  );
};

export default MyProfileContainer;
