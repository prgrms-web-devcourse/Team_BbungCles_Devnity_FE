import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { common, routes } from "../constants";
import { requestGetInviteLink } from "../utils/apis/admin";

const useQueryInviteLink = () => {
  const history = useHistory();

  return useQuery("inviteLink", () => requestGetInviteLink(), {
    onError: ({ response }) => {
      const errorMessage = response
        ? response.data.message
        : common.message.EXPIRE_OR_SERVER_ERROR;
      // TODO: 에러처리 토스트
      // eslint-disable-next-line
      alert(errorMessage);
      if (response) {
        history.push(routes.LOGIN);
      }
    },
    retry: false,
  });
};

export default useQueryInviteLink;
