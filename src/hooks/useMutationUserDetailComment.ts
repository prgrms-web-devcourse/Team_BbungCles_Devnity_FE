import { useMutation, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { common, routes } from "../constants";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestUserDetailWriteComment } from "../utils/apis/introductions";

interface Variables {
  content: string;
  introductionId: number;
  parentId: number | null;
}

const useMutationUserDetailComment = () => {
  const queryClient = useQueryClient();
  const history = useHistory();

  return useMutation<MutationData, MutationError, Variables, unknown>(
    "userDetailWriteComment",
    (values) => requestUserDetailWriteComment(values),
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

export default useMutationUserDetailComment;
