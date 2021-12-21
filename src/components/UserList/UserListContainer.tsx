import { useState } from "react";
import { common } from "../../constants";
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

  const {
    data: pages,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = useUserInfiniteQuery(filters);

  console.log("pages: ", pages);
  console.log("isLoading: ", isLoading);
  console.log("hasNextPage: ", hasNextPage);
  console.log("fetchNextPage: ", fetchNextPage);

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
