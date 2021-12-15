import necessaryAuthAxiosInstance from "./necessaryAuthAxiosInstance";

export const requestPostAddGather = (gatherContent) => {
  console.log({ gatherContent });
  return necessaryAuthAxiosInstance.post("v1/gathers", gatherContent);
};
