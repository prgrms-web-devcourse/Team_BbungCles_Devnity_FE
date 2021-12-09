import unnecessaryAuthAxiosInstance from "./unnecessaryAuthAxiosInstance";
import { FormValues } from "../../components/Signup/types";

export const requestSignup = (values: FormValues) => {
  return unnecessaryAuthAxiosInstance.post("v1/users", values);
};
