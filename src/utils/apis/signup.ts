import axiosInstance from "./axiosInstance";
import { FormValues } from "../../components/Signup/types";

export const requestSignup = (values: FormValues) => {
  return axiosInstance.post("v1/users", values);
};
