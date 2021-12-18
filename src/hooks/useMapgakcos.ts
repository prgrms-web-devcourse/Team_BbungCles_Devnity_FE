import { useQuery } from "react-query";
import { requestGetMapgakcos } from "../utils/apis/mocks";

const getMapgakcos = async () => {
  const { data } = await requestGetMapgakcos();

  return data?.data?.mapgakcos || [];
};

export default function useMapgakcos() {
  return useQuery("mapgakcos", getMapgakcos);
}
