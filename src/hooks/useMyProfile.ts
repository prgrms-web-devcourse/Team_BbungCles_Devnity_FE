import { useQuery } from "react-query";
import { routes } from "../constants";
import { requestGetMyProfile } from "../utils/apis";

const getMyProfile = async () => {
  const { data } = await requestGetMyProfile();
  return data?.data;
};

const useMyProfile = (pathname) =>
  useQuery("globalMyProfile", getMyProfile, {
    retry: false,
    enabled: pathname !== routes.LOGIN,
  });

export default useMyProfile;
