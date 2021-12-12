import { FormikProps } from "formik";
import { ChangeEvent } from "react";
import { Position } from "../../types/commonTypes";

export interface FormValues {
  name: string;
  email: string;
  course: string;
  generation: number | null;
  role: string;
  profileImgUrl: string | null;
  mbti: string | null;
  blogUrl: string | null;
  githubUrl: string | null;
  summary: string;
  latitude: number | null;
  longitude: number | null;
  introductionId: number;
  description?: string | null;
}

interface UserData {
  introduction: {
    blogUrl: string;
    githubUrl: string;
    introductionId: number;
    latitude: number | null;
    longitude: number | null;
    createdAt: string;
    updatedAt: string;
    mbti: string;
    profileImgUrl: string;
    summary: string;
    description?: string | null;
  };

  user: {
    course: string;
    email: string;
    generation: number;
    name: string;
    role: string;
    userId: number;
    createdAt: string;
  };
}

export interface QueryData {
  data: {
    data: UserData;
    statusCode: number;
  };
}

export interface QueryError {
  response: {
    status: number;
    data: {
      message: string | null;
    };
  };
}

export interface IProps {
  formik: FormikProps<FormValues>;
  handleImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleMapClick: (
    target: kakao.maps.Map,
    mouseEvent: kakao.maps.event.MouseEvent
  ) => void;
  userClickPosition: Position | null;
  mapCenterPosition: Position | null;
}
