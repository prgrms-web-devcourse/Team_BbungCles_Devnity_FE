import { useRecoilValue } from "recoil";
import randomUserMapInfo from "../../../fixtures/userMapInfo";
import { globalMyProfile } from "../../atoms/user";
import { common } from "../../constants";
import MapgakcoMap from "./MapgakcoMap";

const MapgakcoMapContainer = () => {
  const currentUser = useRecoilValue(globalMyProfile);

  const userMapInfos = Array.from({ length: 120 }, () => randomUserMapInfo());

  const center = {
    lat: currentUser?.introduction?.latitude || common.defaultPosition.lat,
    lng: currentUser?.introduction?.longitude || common.defaultPosition.lng,
  };

  return <MapgakcoMap initialCenter={center} userMapInfos={userMapInfos} />;
};

export default MapgakcoMapContainer;
