import { markers } from "../../../fixtures/map";
import { Position } from "../../types/MapTypes";
import Mapbox from "../Mapbox/Mapbox";

interface Props {
  center: Position;
  userImageUrl?: string;
}

const Mapgakco = ({ center, userImageUrl = "" }: Props) => {
  return (
    <Mapbox center={center} markers={markers} userImageUrl={userImageUrl} />
  );
};

export default Mapgakco;
