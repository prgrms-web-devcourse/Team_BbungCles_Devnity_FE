import { FormikProps } from "formik";
import { ChangeEvent } from "react";
// import { QueryData } from "../../types/commonTypes";

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
  // TODO: 마크가 description추가 하면 다시 주석 해제 해야 함
  // description: string;
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
    status: string;
    data: {
      message: string | null;
    };
  };
}

export interface IProps {
  image: string;
  formik: FormikProps<FormValues>;
  handleImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
