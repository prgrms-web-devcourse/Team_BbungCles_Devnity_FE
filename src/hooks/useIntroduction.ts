import { useQuery } from "react-query";
import { requestGetIntroductions } from "../utils/apis/introductions";

const getIntroductions = async (userId) => {
  const { data } = await requestGetIntroductions(userId);
  return data?.data;
};

const useIntroduction = (userId) =>
  useQuery(["introductions", userId], () => getIntroductions(userId));

export default useIntroduction;
