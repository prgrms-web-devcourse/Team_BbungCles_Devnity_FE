import { useState } from "react";
import { gathers } from "../../../fixtures/gather";
import { center } from "../../../fixtures/map";
import randomUserInfo from "../../../fixtures/userInfo";
import theme from "../../assets/theme";
import Button from "../base/Button";
import Text from "../base/Text";
import GatherList from "../GatherList/GatherList";
import Mapgakco from "../Mapgakco/Mapgakco";
import UserCard from "../UserCard/UserCard";
import UserImageAndDropdownContainer from "../UserImageAndDropdown/UserImageAndDropdownContainer";
import {
  Contents,
  Header,
  Container,
  MapgakcoAndGatherListContainer,
  SelfIntroduce,
  MapgakcoWrapper,
  TextInnerContainerMedium,
  TextInnerContainerLarge,
  TextOuterContainer,
  SubContents,
  GatherListWrapper,
} from "./styles";

export const FILTER_MAPGAKCO = "show_mapgakco";
export const FILTER_GATHERLIST = "show_gatherlist";

const Main = () => {
  const [filter, setFilter] = useState(FILTER_MAPGAKCO);

  // TODO: 모킹 데이터이므로 API 연동이 완료되면 API 데이터로 교체한다.
  const userInfos = Array.from({ length: 10 }, () => randomUserInfo());

  const currentUser = randomUserInfo();

  return (
    <Container>
      <Header>
        <UserImageAndDropdownContainer
          imageUrl={currentUser.introduction.profileImgUrl}
        />
      </Header>
      <Contents>
        <SelfIntroduce>
          <Text strong size={18}>
            자기소개
          </Text>
          <ul>
            {userInfos.map((userInfo) => (
              <li key={userInfo.user.userId}>
                <UserCard userInfo={userInfo} />
              </li>
            ))}
          </ul>
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
              <Button onClick={() => setFilter(FILTER_MAPGAKCO)}>
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
              </Button>
              <Button onClick={() => setFilter(FILTER_GATHERLIST)}>
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
              </Button>
            </TextInnerContainerMedium>
          </TextOuterContainer>
          <SubContents>
            <MapgakcoWrapper filter={filter}>
              <Mapgakco
                center={center}
                userImageUrl={currentUser.introduction.profileImgUrl}
              />
            </MapgakcoWrapper>
            <GatherListWrapper filter={filter}>
              <GatherList gatherData={gathers} />
            </GatherListWrapper>
          </SubContents>
        </MapgakcoAndGatherListContainer>

        {/* <MapgakcoSummary>
            <Text strong size={18}>
              맵각코 요약
            </Text>
            <MapgakcoContainerWrapper>
              <Mapgakco
                center={center}
                userImageUrl={currentUser.introduction.profileImgUrl}
              />
            </MapgakcoContainerWrapper>
          </MapgakcoSummary>
          <GatherListSummary>
            <Text strong size={18}>
              모집 게시판
            </Text>
            <GatherList gatherData={gathers} />
          </GatherListSummary>
        </MapgakcoAndGatherListWrapper>
        <MapgakcoAndGatherListWrapperMd>
          <FilterTextContainer>
            <Button onClick={() => setFilter(FILTER_MAPGAKCO)}>
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
            </Button>
            <Button onClick={() => setFilter(FILTER_GATHERLIST)}>
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
            </Button>
          </FilterTextContainer>
          <FilteredContent>
            <MapgakcoContainerWrapper
              style={{ display: filter === FILTER_MAPGAKCO ? "flex" : "none" }}
            >
              <Mapgakco
                center={center}
                userImageUrl={currentUser.introduction.profileImgUrl}
              />
            </MapgakcoContainerWrapper>
            <GatherListSummary
              style={{
                display: filter === FILTER_GATHERLIST ? "flex" : "none",
              }}
            >
              <GatherList gatherData={gathers} />
            </GatherListSummary>
          </FilteredContent>
        </MapgakcoAndGatherListWrapperMd> */}
      </Contents>
    </Container>
  );
};

export default Main;
