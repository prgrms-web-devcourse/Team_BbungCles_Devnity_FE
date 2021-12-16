import { useMutation, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { common, routes } from "../constants";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestUserDeleteComment } from "../utils/apis/introductions";

const useMutationUserDeleteComment = () => {
  const queryClient = useQueryClient();
  const history = useHistory();

  return useMutation<MutationData, MutationError, unknown, unknown>(
    "userDeleteLike",
    (values) => requestUserDeleteComment(values),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("introductions");
      },
      onError: ({ response }) => {
        const errorMessage = response
          ? response.data.message
          : common.message.EXPIRE_OR_SERVER_ERROR;

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

export default useMutationUserDeleteComment;
