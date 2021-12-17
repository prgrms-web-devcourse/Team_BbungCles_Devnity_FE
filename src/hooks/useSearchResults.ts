import { useQuery } from "react-query";
import { requestKeywordSearch } from "../utils/apis";

const getKeywordSearch = async (keyword: string) => {
  if (!keyword) {
    return undefined;
  }

  const { data } = await requestKeywordSearch(keyword);

  return data?.documents;
};

export default function useSearchResults(keyword: string) {
  return useQuery(["searchResults", keyword], () => getKeywordSearch(keyword));
}
