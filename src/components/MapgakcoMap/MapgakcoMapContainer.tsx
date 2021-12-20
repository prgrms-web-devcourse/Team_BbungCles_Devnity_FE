import { useRecoilValue } from "recoil";
import randomUserMapInfo from "../../../fixtures/userMapInfo";
import { globalMyProfile } from "../../atoms/user";
import { common, COORDS } from "../../constants";
import useMapgakcosQuery from "../../hooks/useMapgakcosQuery";
import MapgakcoMap from "./MapgakcoMap";

const MapgakcoMapContainer = () => {
  const currentUser = useRecoilValue(globalMyProfile);

  // TODO: 빠른 개발을 위해 모킹 데이터를 쓰고 있다. 추후 데둥이 조회 API로 교체한다.
  const userMapInfos = Array.from({ length: 120 }, () => randomUserMapInfo());

  const center = {
    lat: currentUser?.introduction?.latitude || common.defaultPosition.lat,
    lng: currentUser?.introduction?.longitude || common.defaultPosition.lng,
  };

  const { isLoading, data: mapgakcos } = useMapgakcosQuery({
    // TODO: 현재 API 요청 명세는 x, y 좌표가 뒤바뀌어 있어서 거꾸로 보내고 있다. 수정이 완료되면 정상적으로 바꾼다.
    // TODO: 빠른 개발을 위해 대한민국 전체 좌표 범위를 사용한다. 사용자가 지도의 범위를 수정하면 해당하는 좌표 범위만 보여주도록 하는 기능을 추후 도입한다.
    currentNEY: COORDS.KOREA_NEY,
    currentNEX: COORDS.KOREA_NEX,
    currentSWY: COORDS.KOREA_SWY,
    currentSWX: COORDS.KOREA_SWX,
  });

  if (isLoading) {
    return null;
  }

  return (
    <MapgakcoMap
      initialCenter={center}
      userMapInfos={userMapInfos}
      mapgakcos={mapgakcos}
    />
  );
};

export default MapgakcoMapContainer;
