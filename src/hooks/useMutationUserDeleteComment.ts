import { useMutation, useQueryClient } from "react-query";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestUserDeleteComment } from "../utils/apis/introductions";

const useMutationUserDeleteComment = () => {
  const queryClient = useQueryClient();

  return useMutation<MutationData, MutationError, unknown, unknown>(
    "userDeleteLike",
    (values) => requestUserDeleteComment(values),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("introductions");
      },
    }
  );
};

export default useMutationUserDeleteComment;
