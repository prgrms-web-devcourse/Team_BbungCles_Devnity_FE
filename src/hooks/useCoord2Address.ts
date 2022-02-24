import { useQuery } from "react-query";
import { CartesianPosition } from "../types/commonTypes";
import { requestCoord2Address } from "../utils/apis/coord2Address";

const toAddressFromCoord = async (coord: CartesianPosition) => {
  if (!coord.x || !coord.y) {
    return undefined;
  }

  const { data } = await requestCoord2Address(coord);

  return data?.documents;
};

export default function useCoord2Address(coord: CartesianPosition) {
  return useQuery(["coord2Address", coord], () => toAddressFromCoord(coord));
}
