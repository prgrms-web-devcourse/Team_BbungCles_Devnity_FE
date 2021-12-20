import { useQuery } from "react-query";
import { RequestGetUsersLocations } from "../types/userLocation";
import { requestGetUsersLocations } from "../utils/apis";

const getUsersLocations = async (values: RequestGetUsersLocations) => {
  const { data } = await requestGetUsersLocations(values);

  return data?.data || [];
};

export default function useUsersLocationsQuery(
  values: RequestGetUsersLocations,
  interval = 0
) {
  return useQuery(["usersLocations", values], () => getUsersLocations(values), {
    refetchInterval: interval || false,
  });
}
