import { useQuery } from "react-query";
import { requestGetUserSuggestions } from "../utils/apis/mocks";

const getUserSuggestions = async () => {
  const { data } = await requestGetUserSuggestions();
  return data?.cards;
};

export default function useUserSuggestions() {
  return useQuery("RecommendedUsers", getUserSuggestions);
}
