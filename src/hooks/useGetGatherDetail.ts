import { useQuery } from "react-query";
import { requestGetGatherDetail } from "../utils/apis/gather";

const getGatherDetail = async (gatherId) => {
  const { data } = await requestGetGatherDetail(gatherId);
  return data;
};

const useGetGatherDetail = (gatherId) => {
  return useQuery(["gatherDetail"], async () => getGatherDetail(gatherId));
};

export default useGetGatherDetail;
