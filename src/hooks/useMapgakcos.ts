import { useQuery } from "react-query";
import { RequestGetMapgakcosRange } from "../types/mapgakco";
import { requestGetMapgakcosRange } from "../utils/apis";

const getMapgakcos = async (values: RequestGetMapgakcosRange) => {
  const { data } = await requestGetMapgakcosRange(values);

  return data?.data || [];
};

export default function useMapgakcosQuery(values: RequestGetMapgakcosRange) {
  return useQuery("mapgakcos", () => getMapgakcos(values));
}
