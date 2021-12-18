import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { common, routes } from "../constants";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestMapgakcoRegister } from "../utils/apis/mapgakco";

const useMutationMapgakcoRegister = () => {
  const history = useHistory();

  return useMutation<MutationData, MutationError, unknown, unknown>(
    "mapgakcoRegister",
    (values) => requestMapgakcoRegister(values),
    {
      onSuccess: () => {
        // TODO: 체오에게 물어볼 예정 (맵각코 지도 조회하는 queryId가 필요함)
        // queryClient.invalidateQueries("해당 쿼리 아이디");
      },
      onError: ({ response }) => {
        const errorMessage = response
          ? response.data.message
          : common.message.EXPIRE_OR_SERVER_ERROR;

        // TODO: 에러처리 토스트
        // eslint-disable-next-line
        alert(errorMessage);

        if (!response) {
          history.push(routes.LOGIN);
        }
      },
    }
  );
};

export default useMutationMapgakcoRegister;
