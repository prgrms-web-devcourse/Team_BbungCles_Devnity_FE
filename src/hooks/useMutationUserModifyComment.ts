import { useMutation, useQueryClient } from "react-query";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestUserModifyComment } from "../utils/apis/introductions";

interface Variables {
  content: string;
  introductionId: number;
  commentId: number;
}

const useMutationUserModifyComment = () => {
  const queryClient = useQueryClient();

  return useMutation<MutationData, MutationError, Variables, unknown>(
    "userDetailWriteComment",
    (values) => requestUserModifyComment(values),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("introductions");
      },
    }
  );
};

export default useMutationUserModifyComment;
