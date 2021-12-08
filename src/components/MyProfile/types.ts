import { FormikProps } from "formik";

export interface FormValues {
  name: string;
  email: string;
  course: string;
  generation: number | null;
  role: string;
  profileImgUrl: string;
  mbti: string;
  blogUrl: string;
  githubUrl: string;
  summary: string;
  latitude: number | null;
  longitude: number | null;
  description: string;
}

export interface IProps {
  formik: FormikProps<FormValues>;
}
