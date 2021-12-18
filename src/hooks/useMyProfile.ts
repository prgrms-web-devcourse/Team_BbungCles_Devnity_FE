import { useQuery } from "react-query";
import { routes } from "../constants";
import { requestGetMyProfile } from "../utils/apis";

const getMyProfile = async () => {
  const { data } = await requestGetMyProfile();
  return data?.data;
};

const useMyProfile = (pathname) => {
  return useQuery("globalMyProfile", getMyProfile, {
    retry: false,
    enabled: pathname !== routes.LOGIN && pathname.indexOf(routes.SIGNUP) !== 0,
  });
};

export default useMyProfile;
