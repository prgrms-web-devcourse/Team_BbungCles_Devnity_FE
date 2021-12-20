import { useMutation, useQueryClient } from "react-query";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestEditComment } from "../utils/apis/gather";

const useEditComment = () => {
  const queryClient = useQueryClient();

  return useMutation<MutationData, MutationError, unknown, unknown>(
    "gatherDetailWriteComment",
    (values) => requestEditComment(values),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("gatherDetail");
      },
    }
  );
};

export default useEditComment;
