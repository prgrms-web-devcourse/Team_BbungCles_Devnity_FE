import { useMutation, useQueryClient } from "react-query";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestDeleteComment } from "../utils/apis/gather";

const useDeleteComment = () => {
  const queryClient = useQueryClient();

  return useMutation<MutationData, MutationError, unknown, unknown>(
    "gatherDetailWriteComment",
    (values) => requestDeleteComment(values),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("gatherDetail");
      },
    }
  );
};

export default useDeleteComment;
