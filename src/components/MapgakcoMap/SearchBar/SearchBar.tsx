import { BsArrowRightCircle } from "react-icons/bs";
import theme from "../../../assets/theme";
import Button from "../../base/Button";
import FilterButton from "../FilterButton";
import PlaceSearchForm from "../PlaceSearchForm";
import Text from "../../base/Text";
import {
  SearchContainer,
  PlaceSearchFormWrapper,
  ButtonContainer,
  Guide,
} from "./styles";

interface Props {
  visibleUsers: boolean;
  visibleMapgakcos: boolean;
  isMarkerSelected: boolean;
  onVisibleUsersButtonClick: () => void;
  onVisibleMapgakcosButtonClick: () => void;
  onRegisterButtonClick: () => void;
  onKeywordSubmit: (place) => void;
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

const SearchBar = ({
  visibleUsers,
  visibleMapgakcos,
  isMarkerSelected,
  onVisibleUsersButtonClick,
  onVisibleMapgakcosButtonClick,
  onRegisterButtonClick,
  onKeywordSubmit,
  onMyPositionClick,
}: Props) => {
  const registerButtonStyle = {
    ...buttonStyle,
    color: isMarkerSelected && theme.colors.white,
    backgroundColor: isMarkerSelected
      ? theme.colors.markerBlue
      : theme.colors.white,
  };

  return (
    <>
      <SearchContainer>
        <PlaceSearchFormWrapper>
          <PlaceSearchForm onSubmit={onKeywordSubmit} />
        </PlaceSearchFormWrapper>
        <ButtonContainer>
          <Button style={buttonStyle} onClick={onMyPositionClick}>
            <BsArrowRightCircle style={{ marginRight: 4 }} /> 나의 위치
          </Button>
          <FilterButton
            visible={visibleUsers}
            onClick={onVisibleUsersButtonClick}
          >
            데둥이
          </FilterButton>
          <FilterButton
            visible={visibleMapgakcos}
            onClick={onVisibleMapgakcosButtonClick}
          >
            맵각코
          </FilterButton>
          <Button
            style={registerButtonStyle}
            onClick={onRegisterButtonClick}
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
    </>
  );
};

export default SearchBar;
