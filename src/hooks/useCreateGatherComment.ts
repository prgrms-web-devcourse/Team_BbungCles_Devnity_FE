import { useMutation } from "react-query";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestCreateComment } from "../utils/apis/gather";

const useCreateGatherComment = () => {
  const { mutate } = useMutation<MutationData, MutationError, unknown, unknown>(
    (submitValue) => requestCreateComment(submitValue),
    {
      onSuccess: () => {
        // TODO:
        // eslint-disable-next-line no-alert
        alert("댓글이 작성되었습니다.");
      },
      onError: ({ response }) => {
        const errorMessage = response.data?.message;
        // TODO:
        // eslint-disable-next-line no-alert
        alert(errorMessage);
      },
    }
  );

  return { createComment: mutate };
};

export default useCreateGatherComment;
