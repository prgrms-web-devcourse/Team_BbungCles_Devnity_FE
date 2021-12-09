import axiosInstance from "./axiosInstance";
import { FormValues } from "../../components/Login/types";

export const requestLogin = (values: FormValues) => {
  return axiosInstance.post("v1/auth/login", values);
};
