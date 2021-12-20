import { useMutation, useQueryClient } from "react-query";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestPostMapgakcoApply } from "../utils/apis/mapgakco";

const useMutationMapgakcoApplyPost = (mapgakcoId: string | number) => {
  const queryClient = useQueryClient();

  return useMutation<MutationData, MutationError, unknown, unknown>(
    "mapgakcoApplyPost",
    () => requestPostMapgakcoApply(mapgakcoId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("mapgakcoDetail");
      },
    }
  );
};

export default useMutationMapgakcoApplyPost;
