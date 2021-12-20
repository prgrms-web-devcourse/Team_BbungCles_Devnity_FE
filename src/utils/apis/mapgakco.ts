import necessaryAuthAxiosInstance from "./necessaryAuthAxiosInstance";
import { url, COORDS } from "../../constants";
import { RequestGetMapgakcosRange } from "../../types/mapgakco";

export const requestMapgakcoRegister = (values) => {
  return necessaryAuthAxiosInstance.post(url.MAPGAKCOS, values);
};

export const requestGetMapgakcosRange = (values: RequestGetMapgakcosRange) => {
  return necessaryAuthAxiosInstance.get(url.MAPGAKCOS_RANGE, {
    params: {
      currentNEY: values?.currentNEY || COORDS.KOREA_NEY,
      currentNEX: values?.currentNEX || COORDS.KOREA_NEX,
      currentSWY: values?.currentSWY || COORDS.KOREA_SWY,
      currentSWX: values?.currentSWX || COORDS.KOREA_SWX,
    },
  });
};

export const requestGetMapgakcoDetail = (id: string) => {
  return necessaryAuthAxiosInstance.get(`${url.MAPGAKCOS}${id}`);
};

export const requestPatchMapgakcoDetail = (id: string, values) => {
  return necessaryAuthAxiosInstance.patch(`${url.MAPGAKCOS}${id}`, values);
};
