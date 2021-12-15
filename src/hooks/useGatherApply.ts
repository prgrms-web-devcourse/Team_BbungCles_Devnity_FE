import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { routes } from "../constants";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestApplyGather } from "../utils/apis/gatherDetail";

/*
const getApplyGather = async (gatherId) => {
  const { data } = await requestApplyGather(gatherId); //  const { data } =
  return data?.cards;
};
*/

const useGatherApply = (gatherId) => {
  const history = useHistory();

  const { mutate } = useMutation<MutationData, MutationError, unknown, unknown>(
    (id) => requestApplyGather(id),
    {
      onSuccess: () => {
        // TODO: 성공했을 경우 '회원가입이 완료되었습니다.' 문구를 Toast로 띄워 사용자에게 알려준다. Toast가 완성될 경우 alert는 지운다.
        // eslint-disable-next-line no-alert
        alert("성공!");
        history.push(routes.LOGIN);
      },
      // https://github.com/tannerlinsley/react-query/discussions/1385
      onError: ({ response }) => {
        const errorMessage = response ? response.data.message : "흠..";
        // TODO: 에러가 발생할 경우 Toast를 띄워 사용자에게 알려준다. Toast가 완성될 경우 alert는 지운다.
        // eslint-disable-next-line no-alert
        alert(errorMessage);
      },
    }
  );

  return mutate(gatherId);
};

export default useGatherApply;
