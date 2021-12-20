import { useMutation, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestCreateComment } from "../utils/apis/gather";
import { common, routes } from "../constants";

const useCreateGatherComment = () => {
  const queryClient = useQueryClient();
  const history = useHistory();

  return useMutation<MutationData, MutationError, unknown, unknown>(
    "gatherDetailWriteComment",
    (values) => requestCreateComment(values),
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

export default useCreateGatherComment;
