import { useMutation } from "react-query";
import { common } from "../constants";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestUserDetailWriteComment } from "../utils/apis/introductions";

const writeUserDetailComment = async (values) => {
  const { data } = await requestUserDetailWriteComment(values);
  return data;
};

const useMutationUserDetailComment = () =>
  useMutation<MutationData, MutationError, unknown, unknown>(
    "userDetailWriteComment",
    (values) => writeUserDetailComment(values),
    {
      onSuccess: ({ data }) => {
        // TODO: 백엔드 API 호출 성공시 지우고 setQuery 해야 함
        // eslint-disable-next-line
        console.log(data);
      },
      onError: ({ response }) => {
        const errorMessage = response
          ? response.data.message
          : common.message.UNKNOWN_ERROR;

        // TODO: 에러처리 토스트
        // eslint-disable-next-line
        alert(errorMessage);
      },
    }
  );

export default useMutationUserDetailComment;
