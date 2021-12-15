import { useMutation } from "react-query";
import { common } from "../constants";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestUserLike } from "../utils/apis/introductions";

const useMutationUserLike = () =>
  useMutation<MutationData, MutationError, unknown, unknown>(
    "userDetailWriteComment",
    (id) => requestUserLike(id),
    {
      onSuccess: ({ data }) => {
        // TODO: 백엔드 API 호출 성공시 지우고 setQuery 해야 함
        // eslint-disable-next-line
        console.log(data);
      },
      onError: ({ response }) => {
        const errorMessage = response
          ? response.data.message
          : common.message.EXPIRE_OR_SERVER_ERROR;

        // TODO: 에러처리 토스트
        // eslint-disable-next-line
        alert(errorMessage);
      },
    }
  );

export default useMutationUserLike;
