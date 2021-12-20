import necessaryAuthAxiosInstance from "./necessaryAuthAxiosInstance";
import { url, COORDS } from "../../constants";
import { RequestGetUsersLocations } from "../../types/userLocation";

export const requestGetUsersLocations = (values: RequestGetUsersLocations) => {
  return necessaryAuthAxiosInstance.get(url.USERS_LOCATIONS_RANGE, {
    params: {
      course: values?.course || "",
      generation: values?.generation || "",
      currentNEX: values?.currentNEX || COORDS.KOREA_NEX,
      currentNEY: values?.currentNEY || COORDS.KOREA_NEY,
      currentSWX: values?.currentSWX || COORDS.KOREA_SWX,
      currentSWY: values?.currentSWY || COORDS.KOREA_SWY,
    },
  });
};
