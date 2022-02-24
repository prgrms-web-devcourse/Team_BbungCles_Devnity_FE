import { memo, useCallback, useEffect, useRef, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useHistory, useParams } from "react-router-dom";
import useMapClick from "../../hooks/useMapClick";
import useToggle from "../../hooks/useToggle";
import { CartesianPosition, Position } from "../../types/commonTypes";
import { UserLocationModel } from "../../types/userLocation";
import { Mapgakco } from "../../types/mapTypes";
import { UserData } from "../MyProfile/types";
import Modal from "../base/Modal";
import MapgakcoRegister from "../MapgakcoRegister";
import {
  getMapgakcoMarkerOverlays,
  getUserMarkerOverlays,
} from "../../utils/map/overlay";
import MapgakcoMarker from "./MapgakcoMarker/MapgakcoMarker";
import UserMarker from "./UserMarker";
import MapgakcoDetailContainer from "./MapgakcoDetail/MapgakcoDetailContainer";
import MapFloatControl from "./MapFloatControl";
import { routes } from "../../constants";
import {
  Container,
  Dimmer,
  MapFloatControlWrapper,
  Slider,
  SliderContainer,
} from "./styles";

interface Props {
  initialCenter: Position;
  mapgakcos: Mapgakco[];
  usersLocations: UserLocationModel[];
  currentUser: UserData;
  isMapFloatControlVisible?: boolean;
}

function getMarkerPosition(
  userClickPosition: Position,
  targetPlace: CartesianPosition,
  initialCenter: Position
): Position {
  if (userClickPosition.lat && userClickPosition.lng) {
    return {
      lat: userClickPosition.lat,
      lng: userClickPosition.lng,
    };
  }

  if (targetPlace.x && targetPlace.y) {
    return {
      lat: targetPlace.y,
      lng: targetPlace.x,
    };
  }

  return {
    lat: initialCenter.lat,
    lng: initialCenter.lng,
  };
}

const MapgakcoMap = ({
  initialCenter,
  mapgakcos,
  usersLocations,
  currentUser,
  isMapFloatControlVisible = true,
}: Props) => {
  const history = useHistory();

  const { id: mapgakcoIdParam }: { id: string } = useParams();

  const memoCenter = useRef(initialCenter);

  const [userClickPosition, click, initializeClick] = useMapClick();

  const [isUsersVisible, toggleVisibleUsers] = useToggle(false);
  const [isMapgakcosVisible, toggleVisibleMapgakcos] = useToggle(true);

  const [center, setCenter] = useState({
    lat: initialCenter.lat,
    lng: initialCenter.lng,
  });

  const [targetPlace, setTargetPlace] = useState({
    y: null,
    x: null,
  });

  const [isRegisterModalOpen, setRegisterModalOpen] = useState<boolean>(false);
  const [isDetailPanelOpen, setDetailPanelOpen] = useState<boolean>(false);
  const [isMarkerSelected, setIsMarkerSelected] = useState<boolean>(false);
  const [selectedMapgakco, setSelectedMapgakco] = useState(null);

  const handleKeywordSubmit = useCallback(
    (place) => {
      setTargetPlace((prev) => ({
        ...prev,
        ...place,
      }));

      setCenter({
        lat: place.y,
        lng: place.x,
      });

      initializeClick();
    },
    [initializeClick]
  );

  const handleMyPositionClick = useCallback(() => {
    /*
     * 상태 변경을 비동기로 하는 이유:
     *
     * 지도 UI의 중심점을 사용자의 위치로 변경하려면, 중심점 좌표에 대한 상태값이 변경되어야 합니다. (상태값 변경에 따른 UI 자동 갱신)
     * 그런데 초기 중심점 좌표값(initialCenter)과 사용자의 위치 좌표값(memoCenter)은 항상 동일한 값이므로 리액트 입장에서는 상태가 변경되지 않아 지도 UI를 리렌더링하지 않습니다.
     * 따라서 중심점 좌표에 대한 상태값을 순간적으로 null로 변경했다가 다시 사용자의 위치로 변경하여, 상태값의 변경에 따른 UI 갱신이 발생하도록 만듭니다.
     * 그런데 리액트의 상태 변경은 배치 처리 되므로 null로 변경한 상태 변경은 무시되고 마지막 상태 변경값인 사용자의 위치 좌표값으로 업데이트하는데 이는 초기 중심 좌표와 동일한 값이므로 결국 리렌더링 되지 않습니다.
     * 따라서 상태를 변경할 때마다 리렌더링을 강제하도록 Promise를 이용하여 상태 변경을 비동기적으로 업데이트 합니다.
     */
    Promise.resolve().then(() => {
      setCenter(() => ({
        lat: null,
        lng: null,
      }));

      setCenter(() => ({
        lat: memoCenter.current.lat,
        lng: memoCenter.current.lng,
      }));
    });
  }, []);

  const userMarkerOverlays = getUserMarkerOverlays(usersLocations, currentUser);
  const mapgakcoMarkerOverlays = getMapgakcoMarkerOverlays(mapgakcos);

  const handleRegisterModalClose = useCallback(() => {
    setRegisterModalOpen(false);
    setIsMarkerSelected(false);
    initializeClick();
  }, [initializeClick]);

  const handleDetailPanelClose = () => {
    setDetailPanelOpen(false);
    // url은 변경하되 화면 리렌더링을 하지 않기 위해서 react-router가 아닌 window의 history API 를 사용한다.
    window.history.replaceState(null, null, routes.MAPGAKCOLIST);
  };

  // TODO: 알아보기. useCallback하면 DetailModal이 닫히고 나서 정상적으로 동작하지 않는다.
  const handleRegisterClick = () => setRegisterModalOpen(true);

  const handleMapgakcoClick = useCallback(
    (mapgakco: Mapgakco) => {
      setDetailPanelOpen(true);
      setSelectedMapgakco(mapgakco);

      history.push(`${routes.MAPGAKCOLIST}/${mapgakco.mapgakcoId}`);
    },
    [history]
  );

  useEffect(() => {
    if (userClickPosition.lat && userClickPosition.lng) {
      setIsMarkerSelected(true);
      setTargetPlace({ y: null, x: null });
    }

    if (targetPlace.y && targetPlace.x) {
      setIsMarkerSelected(true);
      initializeClick();
    }

    // eslint-react-hooks가 권장하는대로 targetPlace를 넣을 경우 무한 리렌더링이 발생하므로 넣지 않고 린트 규칙을 비활성화한다
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    targetPlace.x,
    targetPlace.y,
    userClickPosition.lat,
    userClickPosition.lng,
  ]);

  useEffect(() => {
    if (mapgakcoIdParam !== "") {
      const mapgakco = mapgakcos.find(
        (mapgakcoElement) =>
          mapgakcoElement.mapgakcoId === Number(mapgakcoIdParam)
      );

      if (mapgakco) {
        setCenter({
          lat: mapgakco.latitude,
          lng: mapgakco.longitude,
        });
        handleMapgakcoClick(mapgakco);
      }
    }
    // 디펜던시를 추가할 필요가 없으므로 린트 규칙을 비활성화합니다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <MapFloatControlWrapper
        style={{ display: isMapFloatControlVisible ? "flex" : "none" }}
      >
        <MapFloatControl
          isRegisterEnabled={isMarkerSelected}
          isUsersVisible={isUsersVisible}
          isMapgakcosVisible={isMapgakcosVisible}
          toggleVisibleUsers={toggleVisibleUsers}
          toggleVisibleMapgakcos={toggleVisibleMapgakcos}
          onMyPositionClick={handleMyPositionClick}
          onKeywordSearchSubmit={handleKeywordSubmit}
          onRegisterClick={handleRegisterClick}
          isUserClicked={
            userClickPosition.lat !== null && userClickPosition.lng !== null
          }
        />
      </MapFloatControlWrapper>
      <Modal visible={isRegisterModalOpen} width="60%">
        <MapgakcoRegister
          markerPosition={getMarkerPosition(
            userClickPosition,
            targetPlace,
            initialCenter
          )}
          onClose={handleRegisterModalClose}
        />
      </Modal>
      <SliderContainer>
        <Dimmer
          style={{
            zIndex: isDetailPanelOpen && 2,
            display: isDetailPanelOpen && "block",
          }}
        />
        <Slider style={{ transform: isDetailPanelOpen && "translateX(340px)" }}>
          {selectedMapgakco && (
            <MapgakcoDetailContainer
              mapgakcoId={selectedMapgakco?.mapgakcoId}
              onPanelClose={handleDetailPanelClose}
            />
          )}
        </Slider>
      </SliderContainer>
      <Map
        center={{
          lat: center.lat,
          lng: center.lng,
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
        level={4}
        onClick={click}
      >
        {userClickPosition.lat && userClickPosition.lng ? (
          <MapMarker
            position={{
              lat: userClickPosition.lat,
              lng: userClickPosition.lng,
            }}
          />
        ) : targetPlace.x && targetPlace.y ? (
          <MapMarker
            position={{
              lat: targetPlace.y,
              lng: targetPlace.x,
            }}
          />
        ) : null}

        {isUsersVisible &&
          userMarkerOverlays.map(
            ({ position, imageUrl, options: { color, text } }, index) => (
              <UserMarker
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                position={position}
                imageUrl={imageUrl}
                text={text}
                color={color}
              />
            )
          )}

        {isMapgakcosVisible &&
          mapgakcoMarkerOverlays.map(
            ({ position, options: { text }, mapgakco }, index) => (
              <MapgakcoMarker
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                position={position}
                text={text}
                onClick={() => handleMapgakcoClick(mapgakco)}
              />
            )
          )}
      </Map>
    </Container>
  );
};

export default memo(MapgakcoMap);
