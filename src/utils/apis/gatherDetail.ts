import necessaryAuthAxiosInstance from "./necessaryAuthAxiosInstance";

export const requestApplyGather = (gatherId) => {
  return necessaryAuthAxiosInstance.post("gathers/1/apply", gatherId);
};
