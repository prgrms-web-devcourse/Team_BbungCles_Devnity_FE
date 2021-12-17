import { useMutation } from "react-query";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestEditComment } from "../utils/apis/gather";

const useEditComment = () => {
  const { mutate } = useMutation<MutationData, MutationError, unknown, unknown>(
    (editValue) => requestEditComment(editValue),
    {
      onSuccess: () => {
        // TODO:
        // eslint-disable-next-line no-alert
        alert("댓글이 수정되었습니다.");
      },
      onError: ({ response }) => {
        const errorMessage = response?.data?.message;
        // TODO:
        // eslint-disable-next-line no-alert
        alert(errorMessage);
      },
    }
  );

  return { editComment: mutate };
};

export default useEditComment;
