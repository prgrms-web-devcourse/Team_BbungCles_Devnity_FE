import { useQuery } from "react-query";
import { common } from "../constants";
import { requestGetFilteredUsers } from "../utils/apis/introductions";

const useFilteredUserList = (filters) =>
  useQuery(["filteredUsers", filters], () => requestGetFilteredUsers(filters), {
    onError: ({ response }) => {
      const errorMessage = response
        ? response.data.message
        : common.message.EXPIRE_OR_SERVER_ERROR;
      // TODO: 에러가 발생할 경우 Toast를 띄워 사용자에게 알려준다.
      // eslint-disable-next-line
      alert(errorMessage);
    },
    retry: false,
  });

export default useFilteredUserList;
