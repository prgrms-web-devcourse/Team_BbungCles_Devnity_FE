import unnecessaryAuthAxiosInstance from "./unnecessaryAuthAxiosInstance";
import { FormValues } from "../../components/Login/types";

export const requestLogin = (values: FormValues) => {
  return unnecessaryAuthAxiosInstance.post("v1/auth/login", values);
};
