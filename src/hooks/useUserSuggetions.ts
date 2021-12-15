import { useQuery } from "react-query";
import { requestGetUserSuggestions } from "../utils/apis";

const getUserSuggestions = async () => {
  const { data } = await requestGetUserSuggestions();

  return data?.data;
};

export default function useUserSuggestions() {
  return useQuery("userSuggestions", getUserSuggestions);
}
