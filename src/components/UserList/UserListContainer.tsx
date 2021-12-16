import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { common, routes } from "../../constants";
import useUserInfiniteQuery from "../../hooks/useUserInfiniteQuery";
import { Filters } from "./types";
import UserList from "./UserList";

const UserListContainer = () => {
  const [filters, setFilters] = useState<Filters>({
    name: null,
    course: null,
    generation: null,
    role: null,
    nextLastId: null,
    size: common.userListInfinitePageCount,
  });
  const history = useHistory();

  // TODO: 로딩처리 해야 함
  const {
    data: pages,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
  } = useUserInfiniteQuery(filters);

  useEffect(() => {
    if (isError) {
      history.push(routes.LOGIN);
    }
  }, [isError, history]);

  return (
    <UserList
      isLoading={isLoading}
      pages={pages}
      setFilters={setFilters}
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
    />
  );
};

export default UserListContainer;
