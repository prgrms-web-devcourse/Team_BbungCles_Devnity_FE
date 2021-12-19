import { useMutation, useQueryClient } from "react-query";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestUserLike } from "../utils/apis/introductions";

const useMutationUserLike = () => {
  const queryClient = useQueryClient();

  return useMutation<MutationData, MutationError, unknown, unknown>(
    "userLike",
    (id) => requestUserLike(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("introductions");
      },
    }
  );
};

export default useMutationUserLike;
