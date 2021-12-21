import axios from "axios";

const unnecessaryAuthAxiosInstance = axios.create();

unnecessaryAuthAxiosInstance.defaults.baseURL = process.env.API_URL;
unnecessaryAuthAxiosInstance.defaults.responseType = "json";
unnecessaryAuthAxiosInstance.interceptors.response.use(
  (res) => res,
  (res) => Promise.reject(res)
);

export default unnecessaryAuthAxiosInstance;
