import { useQuery } from "react-query";
import { requestGetMyCreatedGather } from "../utils/apis/gather";

const getMyGather = async () => {
  const { data } = await requestGetMyCreatedGather();
  const gathers = data?.data.gathers;
  const mapgakcos = data?.data.mapgakcos;
  return [...gathers, ...mapgakcos];
};

const useMyPostingGather = () => {
  return useQuery(["myPostingGather"], () => getMyGather());
};

export default useMyPostingGather;
