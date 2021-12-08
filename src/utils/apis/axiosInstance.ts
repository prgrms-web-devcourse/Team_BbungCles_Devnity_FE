import axios from "axios";

const axiosInstance = axios.create();

// TODO : 최종 배포 전에 .env 에서 관리할 수 있도록, 토큰을 받아오면 Authorization의 Bearer 뒤에 설정해야 함
// dev - http://3.37.54.135:8888/api/
// prd - https://도메인/api/
axiosInstance.defaults.baseURL = "http://3.37.54.135:8888/api/";
axiosInstance.defaults.responseType = "json";
axiosInstance.defaults.headers.common.Authorization = `Bearer `;
axiosInstance.interceptors.response.use(
  (res) => res,
  (res) => Promise.reject(res)
);

export default axiosInstance;
