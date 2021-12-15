import { useQuery } from "react-query";
import { requestGetGatherSuggestions } from "../utils/apis";

const getGatherSuggestions = async () => {
  const { data } = await requestGetGatherSuggestions();

  return data?.data?.gathers;
};

export default function useGatherSuggestions() {
  return useQuery("gatherSuggestions", getGatherSuggestions);
}
