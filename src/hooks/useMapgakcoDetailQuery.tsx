import { useQuery } from "react-query";
import { requestGetMapgakcoDetail } from "../utils/apis/mocks";

const getMapgakcoDetail = async (id: string) => {
  if (!id) {
    return undefined;
  }

  const { data } = await requestGetMapgakcoDetail(id);

  return data?.data || [];
};

export default function useMapgakcoDetailQuery(id: string) {
  return useQuery(["mapgakcoDetail", id], () => getMapgakcoDetail(id));
}
