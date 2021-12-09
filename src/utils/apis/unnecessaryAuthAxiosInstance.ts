import axios from "axios";

const unnecessaryAuthAxiosInstance = axios.create();

// TODO : 최종 배포 전에 .env 에서 관리할 수 있도록
// dev - http://3.37.54.135:8888/api/
// prd - https://도메인/api/
unnecessaryAuthAxiosInstance.defaults.baseURL = "http://3.37.54.135:8888/api/";
unnecessaryAuthAxiosInstance.defaults.responseType = "json";
unnecessaryAuthAxiosInstance.interceptors.response.use(
  (res) => res,
  (res) => Promise.reject(res)
);

export default unnecessaryAuthAxiosInstance;
