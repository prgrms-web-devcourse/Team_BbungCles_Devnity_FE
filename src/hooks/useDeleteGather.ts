import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { routes } from "../constants";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestDeleteGather } from "../utils/apis/gather";

const useDeleteGather = () => {
  const history = useHistory();
  const { mutate } = useMutation<MutationData, MutationError, unknown, unknown>(
    (gatherId) => requestDeleteGather(gatherId),
    {
      onSuccess: () => {
        // TODO:
        // eslint-disable-next-line no-alert
        alert("모집글이 삭제되었습니다.");
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

  return { deleteGather: mutate };
};

export default useDeleteGather;
