import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { routes } from "../constants";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestPostApplyGather } from "../utils/apis/gather";

const useApplyGather = () => {
  const history = useHistory();

  const { mutate } = useMutation<MutationData, MutationError, unknown, unknown>(
    (gatherId) => requestPostApplyGather(gatherId),
    {
      onSuccess: () => {
        // TODO:
        // eslint-disable-next-line no-alert
        alert("신청이 완료되었습니다.");
        history.push(routes.MYGATHERLIST);
      },
      onError: ({ response }) => {
        const errorMessage = response?.data?.message;
        // TODO:
        // eslint-disable-next-line no-alert
        alert(errorMessage);
      },
    }
  );

  return { applyGather: mutate };
};

export default useApplyGather;
