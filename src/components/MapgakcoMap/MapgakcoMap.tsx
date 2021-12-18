import { memo, useCallback, useEffect, useRef, useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { MapMarker } from "react-kakao-maps-sdk";
import { UserMapInfo } from "../../../fixtures/userMapInfo";
import theme from "../../assets/theme";
import useMapClick from "../../hooks/useMapClick";
import { Position } from "../../types/commonTypes";
import Button from "../base/Button";
import Modal from "../base/Modal";
import Text from "../base/Text";
import Mapbox from "../Mapbox/Mapbox";
import FilterButton from "./FilterButton";
import MapgakcoRegister from "../MapgakcoRegister";
import PlaceSearchForm from "./PlaceSearchForm";
import {
  ButtonContainer,
  Container,
  Guide,
  MapFloatContainer,
  PlaceSearchFormWrapper,
  SearchContainer,
} from "./styles";
import { ImageMarkerOverlay, Mapgakco } from "../../types/mapTypes";

interface Props {
  initialCenter: Position;
  userMapInfos: UserMapInfo[];
  mapgakcos: Mapgakco[];
}

const MapgakcoMap = ({ initialCenter, userMapInfos, mapgakcos }: Props) => {
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

  const [visibleUsers, setVisibleUsers] = useState(false);
  const [visibleMapgakcos, setVisibleMapgakcos] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [isMarkerSelected, setIsMarkerSelected] = useState(false);

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

  const userMarkerOverlays = userMapInfos.map((userMapInfo) => {
    const position = {
      lat: userMapInfo?.latitude,
      lng: userMapInfo?.longitude,
    };

    const imageUrl = userMapInfo.profileImgUrl;

    const options = {
      color: "blue",
      text: userMapInfo.name,
    };

    return { position, imageUrl, options };
  });

  const mapgakcoMarkerOverlays = (mapgakcos || []).map((mapgakco) => {
    const position = {
      lat: mapgakco?.latitude,
      lng: mapgakco?.longitude,
    };

    const options = {
      color: "green",
      text: mapgakco.title,
    };

    return { position, options };
  });

  const getMarkerOVerlays = (): ImageMarkerOverlay[] => {
    const markerOverlays = [];

    if (visibleUsers) {
      markerOverlays.push(...userMarkerOverlays);
    }

    if (visibleMapgakcos) {
      markerOverlays.push(...mapgakcoMarkerOverlays);
    }

    return markerOverlays;
  };

  const handleModalClose = useCallback(
    () => () => {
      setRegisterModalOpen(false);
      setIsMarkerSelected(false);
      initializeClick();
    },
    [initializeClick]
  );

  const handleRegisterClick = useCallback(() => {
    setRegisterModalOpen(true);
  }, []);

  const buttonStyle = {
    padding: "8px",
    minWidth: "80px",
    display: "flex",
    justifyContent: "center",
    borderRadius: "8px",
    boxShadow: theme.boxShadows.primary,
  };

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

  return (
    <Container>
      <MapFloatContainer>
        <Modal visible={isRegisterModalOpen} width="60%">
          <MapgakcoRegister
            userClickPosition={getMarkerPosition()}
            onClose={handleModalClose()}
          />
        </Modal>
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
      </MapFloatContainer>
      <Mapbox
        center={{ lat: center.lat, lng: center.lng }}
        isPanto
        hasControl={false}
        imageMarkerOverlays={getMarkerOVerlays()}
        removeImageMarkerOverlays={!visibleUsers}
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
      </Mapbox>
    </Container>
  );
};

export default memo(MapgakcoMap);
