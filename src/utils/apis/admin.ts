import necessaryAuthAxiosInstance from "./necessaryAuthAxiosInstance";

export const requestMakeInviteLink = (values) => {
  console.log(values);
  return necessaryAuthAxiosInstance.post("v1/admin/links", values);
};

export const requestGetInviteLink = () => {
  return necessaryAuthAxiosInstance.get("v1/admin/links");
};
