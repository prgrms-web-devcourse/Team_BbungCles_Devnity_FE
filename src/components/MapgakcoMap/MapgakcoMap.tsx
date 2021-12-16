import theme from "../../assets/theme";
import { Position } from "../../types/commonTypes";
import Button from "../base/Button";
import Input from "../base/Input";
import Text from "../base/Text";
import Mapbox from "../Mapbox/Mapbox";
import {
  ButtonContainer,
  Container,
  Guide,
  MapFloatContainer,
  SearchContainer,
  SearchForm,
} from "./styles";

interface Props {
  center: Position;
}

const MapgakcoMap = ({ center }: Props) => {
  const inputStyle = {
    fontSize: "16px",
    padding: "12px",
    borderRadius: "8px",
  };

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
          <SearchForm>
            <Input
              customStyle={inputStyle}
              type="text"
              name="search"
              value=""
              placeholder="검색"
              onChange={() => ({})}
            />
          </SearchForm>
          <ButtonContainer>
            <Button style={buttonStyle} onClick={() => ({})}>
              데둥이 위치
            </Button>
            <Button style={buttonStyle} onClick={() => ({})}>
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
        hasCenterMarker
        hasControl={false}
      />
    </Container>
  );
};

export default MapgakcoMap;
