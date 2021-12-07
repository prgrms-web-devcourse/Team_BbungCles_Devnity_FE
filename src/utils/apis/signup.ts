import axiosInstance from "./axiosInstance";
import { FormValues } from "../../components/Signup/types";

// TODO : 회원가입 API 완성되면 axiosInstance.post("v1/users", values); 사용하기
export const requestSignup = (values: FormValues) => {
  // return axiosInstance.post("v1/users", values);
  return new Promise((resolve) => {
    resolve("Success");
  });
};
