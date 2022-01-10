import { BsArrowRightCircle } from "react-icons/bs";
import theme from "../../../assets/theme";
import Button from "../../base/OldButton";
import FilterButton from "../FilterButton";
import PlaceSearchForm from "../PlaceSearchForm/PlaceSearchForm";
import Text from "../../base/Text";
import {
  SearchContainer,
  PlaceSearchFormWrapper,
  ButtonContainer,
  Guide,
} from "./styles";

interface Props {
  isUsersVisible: boolean;
  isMapgakcosVisible: boolean;
  isRegisterEnabled: boolean;
  toggleVisibleUsers: () => void;
  toggleVisibleMapgakcos: () => void;
  onRegisterClick: () => void;
  onKeywordSearchSubmit: (place) => void;
  onMyPositionClick: () => void;
}

const buttonStyle = {
  padding: "8px",
  minWidth: "80px",
  display: "flex",
  justifyContent: "center",
  borderRadius: "8px",
  boxShadow: theme.boxShadows.primary,
  whiteSpace: "nowrap",
} as React.CSSProperties;

const guideTextStyle = {
  background: theme.colors.white,
  padding: "8px",
  borderRadius: "8px",
  fontSize: "12px",
  color: "#91979a",
};

const MapFloatControl = ({
  isUsersVisible,
  isMapgakcosVisible,
  isRegisterEnabled,
  toggleVisibleUsers,
  toggleVisibleMapgakcos,
  onMyPositionClick,
  onKeywordSearchSubmit,
  onRegisterClick,
}: Props) => {
  const registerButtonStyle = {
    ...buttonStyle,
    color: isRegisterEnabled && theme.colors.white,
    backgroundColor: isRegisterEnabled
      ? theme.colors.markerBlue
      : theme.colors.white,
  };

  return (
    <>
      <SearchContainer>
        <PlaceSearchFormWrapper>
          <PlaceSearchForm onSubmit={onKeywordSearchSubmit} />
        </PlaceSearchFormWrapper>
        <ButtonContainer>
          <Button style={buttonStyle} onClick={onMyPositionClick}>
            <BsArrowRightCircle style={{ marginRight: 4 }} /> 나의 위치
          </Button>
          <FilterButton visible={isUsersVisible} onClick={toggleVisibleUsers}>
            데둥이
          </FilterButton>
          <FilterButton
            visible={isMapgakcosVisible}
            onClick={toggleVisibleMapgakcos}
          >
            맵각코
          </FilterButton>
          <Button
            style={registerButtonStyle}
            onClick={onRegisterClick}
            disabled={!isRegisterEnabled}
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
    </>
  );
};

export default MapFloatControl;
