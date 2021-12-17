import necessaryAuthAxiosInstance from "./necessaryAuthAxiosInstance";

export const requestMakeInviteLink = () => {
  return necessaryAuthAxiosInstance.post("test");
};

export const requestGetInviteLink = () => {
  return necessaryAuthAxiosInstance.get("test");
};
