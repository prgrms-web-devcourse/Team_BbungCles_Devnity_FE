import { useMutation, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { common, routes } from "../constants";
import { MutationData, MutationError } from "../types/commonTypes";
import { requestMakeInviteLink } from "../utils/apis/admin";

const useMutationInviteLink = () => {
  const queryClient = useQueryClient();
  const history = useHistory();
  return useMutation<MutationData, MutationError, unknown, unknown>(
    "makeInviteLink",
    () => requestMakeInviteLink(),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("inviteLink");
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

export default useMutationInviteLink;
