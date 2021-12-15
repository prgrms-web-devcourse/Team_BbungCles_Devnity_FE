import { useQuery } from "react-query";
import { requestGetIntroductions } from "../utils/apis/introductions";

const getGatherSuggestions = async (userId) => {
  const { data } = await requestGetIntroductions(userId);
  return data?.userInfo;
};

const useIntroduction = (userId) =>
  useQuery(["introductions", userId], () => getGatherSuggestions(userId));

export default useIntroduction;
