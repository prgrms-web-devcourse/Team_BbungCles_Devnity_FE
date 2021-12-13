import { useQuery } from "react-query";
import { requestGetUsersSuggest } from "../utils/mockApis";

const getUsersSuggest = async () => {
  const { data } = await requestGetUsersSuggest();
  return data?.cards;
};

export default function useUsersSuggest() {
  return useQuery("usersSuggest", getUsersSuggest);
}
