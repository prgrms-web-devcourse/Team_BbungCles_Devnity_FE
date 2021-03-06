import { useInfiniteQuery } from "react-query";
import { requestGetFilteredUsers } from "../utils/apis/introductions";

const useUserInfiniteQuery = (filters) => {
  return useInfiniteQuery(
    ["filteredUsers", filters],
    ({ pageParam }) => requestGetFilteredUsers(filters, pageParam),
    {
      getNextPageParam: (lastPage) => {
        // lastPage.data.data.values는 조회된 결과 값이다.
        // 이 값이 0이면 더이상 불러올 값이 없다는 의미이기 때문에 undefined를 리턴한다.
        // 여기서 undefined를 리턴하면 hasNextPage 값이 false가 되기 때문에 더이상 요청하지 않는다.
        return lastPage.data.data.values.length === 0
          ? undefined
          : lastPage.data.data.nextLastId;
      },
      staleTime: 1000 * 10,
      retry: false,
    }
  );
};

export default useUserInfiniteQuery;
