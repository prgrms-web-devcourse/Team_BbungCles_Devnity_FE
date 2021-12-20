import { useQuery } from "react-query";
import { requestGetIntroductions } from "../utils/apis/introductions";

const useIntroduction = (introductionId) => {
  return useQuery(
    ["introductions", introductionId],
    () => requestGetIntroductions(introductionId),
    {
      retry: false,
    }
  );
};

export default useIntroduction;
