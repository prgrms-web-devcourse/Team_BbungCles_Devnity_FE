import { useQuery } from "react-query";
import { requestGetGatherSuggestions } from "../utils/apis/mocks";

const getGatherSuggestions = async () => {
  const { data } = await requestGetGatherSuggestions();
  return data?.gathers;
};

export default function useUserSuggestions() {
  return useQuery("gatherSuggestions", getGatherSuggestions);
}