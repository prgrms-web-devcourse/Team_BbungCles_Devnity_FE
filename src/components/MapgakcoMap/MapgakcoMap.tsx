import { memo, useCallback, useEffect, useRef, useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useHistory, useParams } from "react-router-dom";
import theme from "../../assets/theme";
import useMapClick from "../../hooks/useMapClick";
import { Position } from "../../types/commonTypes";
import Button from "../base/Button";
import Modal from "../base/Modal";
import Text from "../base/Text";
import FilterButton from "./FilterButton";
import MapgakcoRegister from "../MapgakcoRegister";
import PlaceSearchForm from "./PlaceSearchForm";
import {
  ButtonContainer,
  Container,
  Dimmer,
  Guide,
  MapFloatContainer,
  PlaceSearchFormWrapper,
  SearchContainer,
  Slider,
  SliderContainer,
} from "./styles";
import { Mapgakco } from "../../types/mapTypes";
import {
  getMapgakcoMarkerOverlays,
  getUserMarkerOverlays,
} from "../../utils/map/overlay";
import MapgakcoMarker from "./MapgakcoMarker/MapgakcoMarker";
import UserMarker from "./UserMarker";
import MapgakcoDetailContainer from "./MapgakcoDetail/MapgakcoDetailContainer";
import { ResponseUserLocation } from "../../types/userLocation";
import { UserData } from "../MyProfile/types";
import { routes } from "../../constants";

interface Props {
  initialCenter: Position;
  mapgakcos: Mapgakco[];
  usersLocations: ResponseUserLocation[];
  currentUser: UserData;
  visibleMapFloatContainer?: boolean;
}

const MapgakcoMap = ({
  initialCenter,
  mapgakcos,
  usersLocations,
  currentUser,
  visibleMapFloatContainer = true,
}: Props) => {
  const history = useHistory();

  const { id: mapgakcoIdParam }: { id: string } = useParams();

  const memoCenter = useRef(initialCenter);

  const [userClickPosition, click, initializeClick] = useMapClick();

  const [center, setCenter] = useState({
    lat: initialCenter.lat,
    lng: initialCenter.lng,
  });

  const [targetPlace, setTargetPlace] = useState({
    y: null,
    x: null,
  });

  const [visibleUsers, setVisibleUsers] = useState<boolean>(false);
  const [visibleMapgakcos, setVisibleMapgakcos] = useState<boolean>(true);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState<boolean>(false);
  const [isDetailPanelOpen, setDetailPanelOpen] = useState<boolean>(false);
  const [isMarkerSelected, setIsMarkerSelected] = useState<boolean>(false);
  const [selectedMapgakco, setSelectedMapgakco] = useState(null);

  const handleVisibleUsers = useCallback(() => {
    setVisibleUsers((prev) => !prev);
  }, []);

  const handleVisibleMapgakcos = useCallback(() => {
    setVisibleMapgakcos((prev) => !prev);
  }, []);

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

  const buttonStyle = {
    padding: "8px",
    minWidth: "80px",
    display: "flex",
    justifyContent: "center",
    borderRadius: "8px",
    boxShadow: theme.boxShadows.primary,
    whiteSpace: "nowrap",
  } as React.CSSProperties;

  const registerButtonStyle = {
    ...buttonStyle,
    color: isMarkerSelected && theme.colors.white,
    backgroundColor: isMarkerSelected
      ? theme.colors.markerBlue
      : theme.colors.white,
  };

  const guideTextStyle = {
    background: theme.colors.white,
    padding: "8px",
    borderRadius: "8px",
    fontSize: "12px",
    color: "#91979a",
  };

  const getMarkerPosition = () => {
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
  };

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
    // 디펜던시를 추가해야 할 필요성을 느끼지 못하고 있어서 린트 규칙을 비활성화한다
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <MapFloatContainer
        style={{ display: visibleMapFloatContainer ? "flex" : "none" }}
      >
        <SearchContainer>
          <PlaceSearchFormWrapper>
            <PlaceSearchForm onSubmit={handleKeywordSubmit} />
          </PlaceSearchFormWrapper>
          <ButtonContainer>
            <Button style={buttonStyle} onClick={handleMyPositionClick}>
              <BsArrowRightCircle style={{ marginRight: 4 }} /> 나의 위치
            </Button>
            <FilterButton visible={visibleUsers} onClick={handleVisibleUsers}>
              데둥이
            </FilterButton>
            <FilterButton
              visible={visibleMapgakcos}
              onClick={handleVisibleMapgakcos}
            >
              맵각코
            </FilterButton>
            <Button
              style={registerButtonStyle}
              onClick={handleRegisterClick}
              disabled={!isMarkerSelected}
            >
              등록
            </Button>
          </ButtonContainer>
        </SearchContainer>
        <Guide>
          <Text style={guideTextStyle}>
            위치를 지정한 후 등록 버튼을 눌러주세요.
          </Text>
        </Guide>
        <Modal visible={isRegisterModalOpen} width="60%">
          <MapgakcoRegister
            userClickPosition={getMarkerPosition()}
            onClose={handleRegisterModalClose}
          />
        </Modal>
      </MapFloatContainer>
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

        {visibleUsers &&
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

        {visibleMapgakcos &&
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
