import { useMutation, useQueryClient } from "react-query";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestMapgakcoRegister } from "../utils/apis/mapgakco";

const useMutationMapgakcoRegister = () => {
  const queryClient = useQueryClient();

  return useMutation<MutationData, MutationError, unknown, unknown>(
    "mapgakcoRegister",
    (values) => requestMapgakcoRegister(values),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("mapgakcos");
      },
    }
  );
};

export default useMutationMapgakcoRegister;
