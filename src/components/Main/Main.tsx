import { useState } from "react";
import theme from "../../assets/theme";
import { Gather } from "../../types/gather";
import { UserInfo } from "../../types/userInfo";
import Text from "../base/Text";
import GatherList from "../GatherList/GatherList";
import UserCardList from "../UserCardList/UserCardList";
import MapgakcoSummaryContainer from "./MapgakcoSummary/MapgakcoSummaryContainer";
import {
  Contents,
  Container,
  MapgakcoAndGatherListContainer,
  SelfIntroduce,
  MapgakcoWrapper,
  TextInnerContainerMedium,
  TextInnerContainerLarge,
  TextOuterContainer,
  SubContents,
  GatherListWrapper,
  FilterButton,
} from "./styles";

export const FILTER_MAPGAKCO = "show_mapgakco";
export const FILTER_GATHERLIST = "show_gatherlist";

interface Props {
  userSuggestions: UserInfo[];
  gatherSuggestions: Gather[];
}

const Main = ({ userSuggestions, gatherSuggestions }: Props) => {
  const [filter, setFilter] = useState(FILTER_MAPGAKCO);

  return (
    <Container>
      <Contents>
        <SelfIntroduce>
          <Text strong size={18}>
            자기소개
          </Text>
          <UserCardList userInfos={userSuggestions} />
        </SelfIntroduce>
        <MapgakcoAndGatherListContainer>
          <TextOuterContainer>
            <TextInnerContainerLarge>
              <Text strong size={18}>
                맵각코 요약
              </Text>
              <Text strong size={18}>
                모집 게시판
              </Text>
            </TextInnerContainerLarge>
            <TextInnerContainerMedium>
              <FilterButton onClick={() => setFilter(FILTER_MAPGAKCO)}>
                <Text
                  color={
                    filter === FILTER_MAPGAKCO
                      ? theme.colors.black
                      : theme.colors.disabled
                  }
                  strong
                  size={18}
                >
                  맵각코 요약
                </Text>
              </FilterButton>
              <FilterButton onClick={() => setFilter(FILTER_GATHERLIST)}>
                <Text
                  color={
                    filter === FILTER_GATHERLIST
                      ? theme.colors.black
                      : theme.colors.disabled
                  }
                  strong
                  size={18}
                >
                  모집 게시판
                </Text>
              </FilterButton>
            </TextInnerContainerMedium>
          </TextOuterContainer>
          <SubContents>
            <MapgakcoWrapper filter={filter}>
              <MapgakcoSummaryContainer />
            </MapgakcoWrapper>
            <GatherListWrapper filter={filter}>
              <GatherList gatherData={gatherSuggestions} />
            </GatherListWrapper>
          </SubContents>
        </MapgakcoAndGatherListContainer>
      </Contents>
    </Container>
  );
};

export default Main;
