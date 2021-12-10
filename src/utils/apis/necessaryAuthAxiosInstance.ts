import axios from "axios";
import { login } from "../../constants";
import { getLocalStorageItem } from "../functions";

const axiosInstance = axios.create();

// TODO : 최종 배포 전에 .env 에서 관리할 수 있도록
// dev - http://3.37.54.135:8888/api/
// prd - https://도메인/api/
axiosInstance.defaults.baseURL = "http://3.37.54.135:8888/api/";
axiosInstance.defaults.responseType = "json";
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getLocalStorageItem(login.localStorageKey.TOKEN, "");
    const newConfig = config;

    newConfig.headers.Authorization = `${token}`;

    return newConfig;
  },
  (error) => Promise.reject(error)
);
axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    console.log(error);
    console.log(error.response);
    return Promise.reject(error);
  }
);

export default axiosInstance;
