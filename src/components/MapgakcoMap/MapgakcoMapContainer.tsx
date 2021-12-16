import { useRecoilValue } from "recoil";
import { currentUserState } from "../../atoms/user";
import { common } from "../../constants";
import MapgakcoMap from "./MapgakcoMap";

const MapgakcoMapContainer = () => {
  const currentUser = useRecoilValue(currentUserState);

  const center = {
    lat: currentUser?.introduction?.latitude || common.defaultPosition.lat,
    lng: currentUser?.introduction?.longitude || common.defaultPosition.lng,
  };

  return <MapgakcoMap initialCenter={center} />;
};

export default MapgakcoMapContainer;
