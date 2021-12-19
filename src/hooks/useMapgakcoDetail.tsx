import { useQuery } from "react-query";
import { requestGetMapgakcoDetail } from "../utils/apis/mocks";

const getMapgakcoDetail = async (id: string) => {
  if (!id) {
    return undefined;
  }

  const { data } = await requestGetMapgakcoDetail(id);

  console.log({ data });

  return data?.data || [];
};

export default function useMapgakcoDetail(id: string) {
  return useQuery(["mapgakcoDetail", id], () => getMapgakcoDetail(id));
}
