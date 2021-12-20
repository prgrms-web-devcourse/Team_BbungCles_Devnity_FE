import { useMutation, useQueryClient } from "react-query";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestDeleteMapgakcoApply } from "../utils/apis/mapgakco";

const useMutationMapgakcoApplyDelete = (mapgakcoId: string | number) => {
  const queryClient = useQueryClient();

  return useMutation<MutationData, MutationError, unknown, unknown>(
    "mapgakcoApplyDelete",
    () => requestDeleteMapgakcoApply(mapgakcoId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("mapgakcoDetail");
      },
    }
  );
};

export default useMutationMapgakcoApplyDelete;
