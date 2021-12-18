import { useRecoilValue } from "recoil";
import randomUserMapInfo from "../../../fixtures/userMapInfo";
import { globalMyProfile } from "../../atoms/user";
import { common } from "../../constants";
import useMapgakcos from "../../hooks/useMapgakcos";
import MapgakcoMap from "./MapgakcoMap";

const MapgakcoMapContainer = () => {
  const currentUser = useRecoilValue(globalMyProfile);

  const userMapInfos = Array.from({ length: 120 }, () => randomUserMapInfo());

  const center = {
    lat: currentUser?.introduction?.latitude || common.defaultPosition.lat,
    lng: currentUser?.introduction?.longitude || common.defaultPosition.lng,
  };

  const { data: mapgakcos } = useMapgakcos();

  return (
    <MapgakcoMap
      initialCenter={center}
      userMapInfos={userMapInfos}
      mapgakcos={mapgakcos}
    />
  );
};

export default MapgakcoMapContainer;
