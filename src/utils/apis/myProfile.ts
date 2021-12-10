import necessaryAuthAxiosInstance from "./necessaryAuthAxiosInstance";

export const requestGetMyProfile = () => {
  return necessaryAuthAxiosInstance.get("v1/users/me");
};
