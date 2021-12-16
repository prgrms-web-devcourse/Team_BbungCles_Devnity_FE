import { useCallback, useRef, useState } from "react";
import { BsArrowRightCircle, BsEye } from "react-icons/bs";
import { MapMarker } from "react-kakao-maps-sdk";
import theme from "../../assets/theme";
import { Position } from "../../types/commonTypes";
import { isEqualPosition } from "../../utils/map";
import Button from "../base/Button";
import Text from "../base/Text";
import Mapbox from "../Mapbox/Mapbox";
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
}

const MapgakcoMap = ({ initialCenter }: Props) => {
  const memoCenter = useRef(initialCenter);

  const [center, setCenter] = useState({
    lat: initialCenter.lat,
    lng: initialCenter.lng,
  });

  const [currentCenter, setCurrentCenter] = useState({
    lat: initialCenter.lat,
    lng: initialCenter.lng,
  });

  const [target, setTarget] = useState({
    y: null,
    x: null,
  });

  const handleKeywordSubmit = useCallback((place) => {
    setTarget((prev) => ({
      ...prev,
      ...place,
    }));

    setCenter({
      lat: place.y,
      lng: place.x,
    });
  }, []);

  const handleMyPositionClick = useCallback(() => {
    if (isEqualPosition(currentCenter, memoCenter.current)) {
      return;
    }

    Promise.resolve().then(() => {
      setCenter(() => ({
        lat: currentCenter.lat,
        lng: currentCenter.lng,
      }));

      setCenter(() => ({
        lat: memoCenter.current.lat,
        lng: memoCenter.current.lng,
      }));
    });
  }, [currentCenter]);

  const handleCenterChange = useCallback(({ lat, lng }) => {
    setCurrentCenter({
      lat,
      lng,
    });
  }, []);

  const buttonStyle = {
    padding: "8px",
    backgroundColor: theme.colors.white,
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

  return (
    <Container>
      <MapFloatContainer>
        <SearchContainer>
          <PlaceSearchFormWrapper>
            <PlaceSearchForm onSubmit={handleKeywordSubmit} />
          </PlaceSearchFormWrapper>
          <ButtonContainer>
            <Button style={buttonStyle} onClick={handleMyPositionClick}>
              <BsArrowRightCircle style={{ marginRight: 4 }} /> 나의 위치
            </Button>
            <Button style={buttonStyle} onClick={() => ({})}>
              <BsEye style={{ marginRight: 4 }} /> 데둥이
            </Button>
            <Button style={buttonStyle} onClick={() => ({})}>
              <BsEye style={{ marginRight: 4 }} />
              모각코
            </Button>
            <Button style={buttonStyle} onClick={() => ({})}>
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
        onCenterChanged={handleCenterChange}
      >
        {target.x && target.y && (
          <MapMarker
            position={{
              lat: target.y,
              lng: target.x,
            }}
          />
        )}
      </Mapbox>
    </Container>
  );
};

export default MapgakcoMap;
