import axios from "axios";
import { login } from "../../constants";
import { getLocalStorageItem } from "../functions";

const axiosInstance = axios.create();

// axiosInstance.defaults.baseURL = "http://3.37.54.135:8888/api/";
axiosInstance.defaults.baseURL = process.env.API_URL;
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
  (error) => Promise.reject(error)
);

export default axiosInstance;
