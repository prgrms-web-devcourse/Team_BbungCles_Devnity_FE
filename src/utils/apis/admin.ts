import necessaryAuthAxiosInstance from "./necessaryAuthAxiosInstance";

export const requestMakeInviteLink = (values) => {
  return necessaryAuthAxiosInstance.post("v1/admin/links", values);
};

export const requestGetInviteLink = () => {
  return necessaryAuthAxiosInstance.get("v1/admin/links");
};

export const requestCheckValidLink = (linkUuid) => {
  return necessaryAuthAxiosInstance.get(`v1/auth/links/${linkUuid}`);
};
