import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { routes } from "../constants";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestCloseGather } from "../utils/apis/gather";

const useClosGather = () => {
  const history = useHistory();
  const { mutate } = useMutation<MutationData, MutationError, unknown, unknown>(
    (gatherId) => requestCloseGather(gatherId),
    {
      onSuccess: () => {
        // TODO:
        // eslint-disable-next-line no-alert
        alert("모집이 마감되었습니다.");
        history.push(routes.GATHERLIST);
      },
      onError: ({ response }) => {
        const errorMessage = response?.data?.message;
        // TODO:
        // eslint-disable-next-line no-alert
        alert(errorMessage);
      },
    }
  );

  return { closeGather: mutate };
};

export default useClosGather;
