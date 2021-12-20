import { useMutation, useQueryClient } from "react-query";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestPatchMapgakcoDetail } from "../utils/apis/mapgakco";

const useMutationMapgakcoPatch = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation<MutationData, MutationError, unknown, unknown>(
    "mapgakcoPatch",
    (values) => requestPatchMapgakcoDetail(id, values),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("mapgakcoDetail");
        queryClient.invalidateQueries("mapgakcos");
      },
    }
  );
};

export default useMutationMapgakcoPatch;
