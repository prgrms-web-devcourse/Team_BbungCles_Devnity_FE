import necessaryAuthAxiosInstance from "./necessaryAuthAxiosInstance";

export const requestMapgakcoRegister = (values) => {
  return necessaryAuthAxiosInstance.post("v1/mapgakcos", values);
};
