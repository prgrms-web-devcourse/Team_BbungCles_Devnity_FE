import { useQuery } from "react-query";
import { requestGetMyAppliedGather } from "../utils/apis/gather";

const getMyGather = async () => {
  const { data } = await requestGetMyAppliedGather();
  const gathers = data?.data.gathers;
  const mapgakcos = data?.data.mapgakcos;
  return [...gathers, ...mapgakcos];
};

const useMyAppliedGather = () => {
  return useQuery(["myAppliedGather"], () => getMyGather());
};

export default useMyAppliedGather;
