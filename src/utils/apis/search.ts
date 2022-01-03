import { url } from "../../constants/searchApi";
import mapAxiosInstance from "./mapAxiosInstance";

export const requestKeywordSearch = (keyword: string) => {
  return mapAxiosInstance.get(`${url.MAP_KEYWORD_SEARCH}?query=${keyword}`);
};
