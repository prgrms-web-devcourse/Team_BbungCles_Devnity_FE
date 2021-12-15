import { url } from "../../constants";
import unnecessaryAuthAxiosInstance from "./unnecessaryAuthAxiosInstance";

export const requestGetUserSuggestions = () => {
  return unnecessaryAuthAxiosInstance.get(url.USER_SUGGESTIONS);
};

export const requestGetGatherSuggestions = () => {
  return unnecessaryAuthAxiosInstance.get(url.GAHTER_SUGGESTIONS);
};
