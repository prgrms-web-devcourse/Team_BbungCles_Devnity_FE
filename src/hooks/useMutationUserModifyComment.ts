import { useMutation, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { common, routes } from "../constants";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestUserModifyComment } from "../utils/apis/introductions";

interface Variables {
  content: string;
  introductionId: number;
  commentId: number;
}

const useMutationUserModifyComment = () => {
  const queryClient = useQueryClient();
  const history = useHistory();

  return useMutation<MutationData, MutationError, Variables, unknown>(
    "userDetailWriteComment",
    (values) => requestUserModifyComment(values),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("introductions");
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

export default useMutationUserModifyComment;
