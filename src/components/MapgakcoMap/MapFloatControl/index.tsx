import { BsArrowRightCircle } from "react-icons/bs";
import theme from "../../../assets/theme";
import FilterButton from "../FilterButton";
import PlaceSearchForm from "../PlaceSearchForm/PlaceSearchForm";
import Text from "../../base/Text";
import {
  SearchContainer,
  PlaceSearchFormWrapper,
  ButtonContainer,
  Guide,
  MyPositionButton,
  RegisterButton,
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
  return (
    <>
      <SearchContainer>
        <PlaceSearchFormWrapper>
          <PlaceSearchForm onSubmit={onKeywordSearchSubmit} />
        </PlaceSearchFormWrapper>
        <ButtonContainer>
          <MyPositionButton onClick={onMyPositionClick}>
            <BsArrowRightCircle style={{ marginRight: 4 }} /> 나의 위치
          </MyPositionButton>
          <FilterButton visible={isUsersVisible} onClick={toggleVisibleUsers}>
            데둥이
          </FilterButton>
          <FilterButton
            visible={isMapgakcosVisible}
            onClick={toggleVisibleMapgakcos}
          >
            맵각코
          </FilterButton>
          <RegisterButton
            isRegisterEnabled={isRegisterEnabled}
            onClick={onRegisterClick}
            disabled={!isRegisterEnabled}
          >
            등록
          </RegisterButton>
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
