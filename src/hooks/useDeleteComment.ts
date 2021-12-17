import { useMutation } from "react-query";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestDeleteComment } from "../utils/apis/gather";

const useDeleteComment = () => {
  const { mutate } = useMutation<MutationData, MutationError, unknown, unknown>(
    (deleteValue) => requestDeleteComment(deleteValue),
    {
      onSuccess: () => {
        // TODO:
        // eslint-disable-next-line no-alert
        alert("댓글이 삭제되었습니다.");
      },
      onError: ({ response }) => {
        const errorMessage = response?.data?.message;
        // TODO:
        // eslint-disable-next-line no-alert
        alert(errorMessage);
      },
    }
  );

  return { deleteComment: mutate };
};

export default useDeleteComment;
