import { useMutation } from "react-query";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestMapgakcoRegister } from "../utils/apis/mapgakco";

const useMutationMapgakcoRegister = () => {
  return useMutation<MutationData, MutationError, unknown, unknown>(
    "mapgakcoRegister",
    (values) => requestMapgakcoRegister(values),
    {
      onSuccess: () => {
        // TODO: 체오에게 물어볼 예정 (맵각코 지도 조회하는 queryId가 필요함)
        // queryClient.invalidateQueries("해당 쿼리 아이디");
      },
    }
  );
};

export default useMutationMapgakcoRegister;
