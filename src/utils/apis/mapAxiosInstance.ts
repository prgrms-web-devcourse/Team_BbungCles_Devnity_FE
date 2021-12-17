import axios from "axios";

const mapAxiosInstance = axios.create();

mapAxiosInstance.defaults.baseURL = "https://dapi.kakao.com/";
mapAxiosInstance.defaults.responseType = "json";
mapAxiosInstance.interceptors.request.use(
  (config) => {
    const newConfig = config;

    newConfig.headers.Authorization = `KakaoAK ${process.env.REST_API_KEY}`;

    return newConfig;
  },
  (error) => Promise.reject(error)
);
mapAxiosInstance.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject(error)
);

export default mapAxiosInstance;
