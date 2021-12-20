import { useMutation, useQueryClient } from "react-query";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestCreateComment } from "../utils/apis/gather";

const useCreateGatherComment = () => {
  const queryClient = useQueryClient();

  return useMutation<MutationData, MutationError, unknown, unknown>(
    "gatherDetailWriteComment",
    (values) => requestCreateComment(values),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("gatherDetail");
      },
    }
  );
};

export default useCreateGatherComment;
