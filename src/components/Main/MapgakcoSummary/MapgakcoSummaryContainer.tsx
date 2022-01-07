import { useRecoilValue } from "recoil";
import { globalMyProfile } from "../../../atoms";
import { common, COORDS, CourseKeyType } from "../../../constants";
import useMapgakcosQuery from "../../../hooks/useMapgakcosQuery";
import useUsersLocationsQuery from "../../../hooks/useUsersLocationsQuery";
import MapgakcoMap from "../../MapgakcoMap/MapgakcoMap";

const MapgakcoSummaryContainer = () => {
  const currentUser = useRecoilValue(globalMyProfile);

  const { data: usersLocations } = useUsersLocationsQuery({
    // TODO: 빠른 개발을 위해 대한민국 전체 좌표 범위를 사용한다. 사용자가 지도의 범위를 수정하면 해당하는 좌표 범위만 보여주도록 하는 기능을 추후 도입한다.
    course: (currentUser?.user?.course as CourseKeyType) || "FE",
    generation: currentUser?.user?.generation,
    currentNEY: COORDS.KOREA_NEY,
    currentNEX: COORDS.KOREA_NEX,
    currentSWY: COORDS.KOREA_SWY,
    currentSWX: COORDS.KOREA_SWX,
  });

  const center = {
    lat: currentUser?.introduction?.latitude || common.defaultPosition.lat,
    lng: currentUser?.introduction?.longitude || common.defaultPosition.lng,
  };

  const { isLoading, data: mapgakcos } = useMapgakcosQuery({
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
      usersLocations={usersLocations}
      mapgakcos={mapgakcos}
      currentUser={currentUser}
      isMapFloatControlVisible={false}
    />
  );
};

export default MapgakcoSummaryContainer;
