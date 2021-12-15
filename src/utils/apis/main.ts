import { url } from "../../constants";
import necessaryAuthAxiosInstance from "./necessaryAuthAxiosInstance";

export const requestGetUserSuggestions = () => {
  return necessaryAuthAxiosInstance.get(url.USER_SUGGESTIONS);
};

export const requestGetGatherSuggestions = () => {
  return necessaryAuthAxiosInstance.get(url.GAHTER_SUGGESTIONS);
};
