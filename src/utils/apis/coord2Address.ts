import { url } from "../../constants/searchApi";
import { CartesianPosition } from "../../types/commonTypes";
import mapAxiosInstance from "./mapAxiosInstance";

export const requestCoord2Address = (coord: CartesianPosition) => {
  return mapAxiosInstance.get(`${url.COORD2ADDRESS}?x=${coord.x}&y=${coord.y}`);
};
