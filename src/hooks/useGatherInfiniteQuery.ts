import { useInfiniteQuery } from "react-query";
import { requestGetFilteredGathers } from "../utils/apis/gather";

const useGatherinfiniteQuery = (filters) => {
  return useInfiniteQuery(
    ["FilteredGathers", filters],
    ({ pageParam }) => requestGetFilteredGathers(filters, pageParam),
    {
      getNextPageParam: (last) => {
        return last.data.data.values.length === 0
          ? undefined
          : last.data.data.nextLastId;
      },
      staleTime: 1000 * 10,
      retry: false,
    }
  );
};

export default useGatherinfiniteQuery;
