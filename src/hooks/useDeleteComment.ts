import { useMutation, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { common, routes } from "../constants";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestDeleteComment } from "../utils/apis/gather";

const useDeleteComment = () => {
  const queryClient = useQueryClient();
  const history = useHistory();

  return useMutation<MutationData, MutationError, unknown, unknown>(
    "gatherDetailWriteComment",
    (values) => requestDeleteComment(values),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("gatherDetail");
      },
      onError: ({ response }) => {
        const errorMessage = response
          ? response.data.message
          : common.message.UNKNOWN_ERROR;

        // TODO: 에러처리 토스트
        // eslint-disable-next-line
        alert(errorMessage);

        if (!response) {
          history.push(routes.LOGIN);
        }
      },
    }
  );
};

export default useDeleteComment;
