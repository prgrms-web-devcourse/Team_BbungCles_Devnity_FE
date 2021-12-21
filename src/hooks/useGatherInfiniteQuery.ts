import { useInfiniteQuery } from "react-query";
import { requestGetFilteredGathers } from "../utils/apis/gather";

const useGatherinfiniteQuery = (filters) => {
  return useInfiniteQuery(
    ["FilteredGathers", filters],
    ({ pageParam }) => requestGetFilteredGathers(filters, pageParam),
    {
      getNextPageParam: (last) => {
        // console.log(last);
        // console.log(last.data.data.nextLastId);
        return last.data.data.values.length === 0
          ? undefined
          : last.data.data.nextLastId;
        // last.after ?? false;
      },
      staleTime: 1000 * 10,
      retry: false,
    }
  );
};

export default useGatherinfiniteQuery;
