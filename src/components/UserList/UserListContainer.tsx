import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import randomUsers from "../../../fixtures/userList";
import { routes } from "../../constants";
import UserList from "./UserList";

const UserListContainer = () => {
  const history = useHistory();
  // TODO: 모킹 데이터이므로 API 연동이 완료되면 API 데이터로 교체한다.
  const users = Array.from({ length: 10 }, () => randomUsers());
  const handleMoveDetailPage = useCallback(
    (userId) => {
      if (userId) {
        history.push(`${routes.USERLIST}/${userId}`);
      }
    },
    [history]
  );

  return <UserList users={users} handleMoveDetailPage={handleMoveDetailPage} />;
};

export default UserListContainer;
