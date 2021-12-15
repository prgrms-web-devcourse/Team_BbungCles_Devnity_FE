import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { routes } from "../../constants";
import useFilteredUserList from "../../hooks/useFilteredUserList";
import { Filters } from "./types";
import UserList from "./UserList";

const UserListContainer = () => {
  const [filters, setFilters] = useState<Filters>({
    name: null,
    course: null,
    generation: null,
    role: null,
    nextLastId: null,
    size: null,
  });
  const history = useHistory();
  const handleMoveDetailPage = useCallback(
    (userId) => {
      if (userId) {
        history.push(`${routes.USERLIST}/${userId}`);
      }
    },
    [history]
  );

  // TODO: 로딩처리 해야 함
  const { data: users, isLoading } = useFilteredUserList(filters);

  return (
    <UserList
      isLoading={isLoading}
      users={users}
      handleMoveDetailPage={handleMoveDetailPage}
      setFilters={setFilters}
    />
  );
};

export default UserListContainer;
