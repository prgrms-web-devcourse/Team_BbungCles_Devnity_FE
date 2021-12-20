import { useMutation, useQueryClient } from "react-query";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestUserDetailWriteComment } from "../utils/apis/introductions";

interface Variables {
  content: string;
  introductionId: number;
  parentId: number | null;
}

const useMutationUserDetailComment = () => {
  const queryClient = useQueryClient();

  return useMutation<MutationData, MutationError, Variables, unknown>(
    "userDetailWriteComment",
    (values) => requestUserDetailWriteComment(values),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("introductions");
      },
    }
  );
};

export default useMutationUserDetailComment;
