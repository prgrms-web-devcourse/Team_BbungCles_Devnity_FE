import { useMutation, useQueryClient } from "react-query";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestUserDeleteLike } from "../utils/apis/introductions";

const useMutationUserDeleteLike = () => {
  const queryClient = useQueryClient();

  return useMutation<MutationData, MutationError, unknown, unknown>(
    "userDeleteLike",
    (id) => requestUserDeleteLike(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("introductions");
      },
    }
  );
};

export default useMutationUserDeleteLike;
