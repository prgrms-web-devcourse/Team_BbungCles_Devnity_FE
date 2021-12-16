import { useQuery } from "react-query";
import { common } from "../constants";
import { requestGetIntroductions } from "../utils/apis/introductions";

const useIntroduction = (introductionId) =>
  useQuery(
    ["introductions", introductionId],
    () => requestGetIntroductions(introductionId),
    {
      onError: ({ response }) => {
        const errorMessage = response
          ? response.data.message
          : common.message.UNKNOWN_ERROR;
        // TODO: 에러가 발생할 경우 Toast를 띄워 사용자에게 알려준다.
        // eslint-disable-next-line
        alert(errorMessage);
      },

      retry: false,
    }
  );

export default useIntroduction;
