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

interface Props {
  initialCenter: Position;
  userMapInfos: UserMapInfo[];
}

const MapgakcoMap = ({ initialCenter, userMapInfos }: Props) => {
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

  const [isMapClick, setIsMapClick] = useState(false);

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

  const imageMarkerOverlays = userMapInfos.map((userMapInfo) => {
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
  const handleModalClose = useCallback(
    () => () => {
      setRegisterModalOpen(false);
      setIsMapClick(false);
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

  const guideTextStyle = {
    background: theme.colors.white,
    padding: "8px",
    borderRadius: "8px",
    fontSize: "12px",
    color: "#91979a",
  };

  useEffect(() => {
    if (userClickPosition.lat && userClickPosition.lng) {
      setIsMapClick(true);
    }
  }, [userClickPosition]);

  return (
    <Container>
      <MapFloatContainer>
        <Modal visible={isRegisterModalOpen}>
          <MapgakcoRegister
            userClickPosition={userClickPosition}
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
              모각코
            </FilterButton>
            <Button
              style={buttonStyle}
              onClick={handleRegisterClick}
              disabled={!isMapClick}
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
        imageMarkerOverlays={visibleUsers ? imageMarkerOverlays : []}
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
