import { useQuery } from "react-query";
import { requestGetFilteredUsers } from "../utils/apis/introductions";

const getFilteredUsers = async (filters) => {
  const { data } = await requestGetFilteredUsers(filters);
  return data;
};

const useFilteredUserList = (filters) =>
  useQuery(["filteredUsers", filters], () => getFilteredUsers(filters), {
    retry: false,
  });

export default useFilteredUserList;
