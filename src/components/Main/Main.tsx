import { useState } from "react";
import { Map } from "react-kakao-maps-sdk";
import { gathers } from "../../../fixtures/gather";
import { center } from "../../../fixtures/map";
import randomUserInfo, { UserInfo } from "../../../fixtures/userInfo";
import theme from "../../assets/theme";
import Button from "../base/Button";
import Text from "../base/Text";
import GatherList from "../GatherList/GatherList";
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

interface Props {
  usersSuggest: UserInfo[];
}

const Main = ({ usersSuggest }: Props) => {
  const [filter, setFilter] = useState(FILTER_MAPGAKCO);

  // TODO: 모킹 데이터이므로 API 연동이 완료되면 API 데이터로 교체한다.
  // const userInfos = Array.from({ length: 10 }, () => randomUserInfo());

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
            {usersSuggest?.map((userInfo) => (
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
              <Map
                center={{
                  lat: center.latitude,
                  lng: center.longitude,
                }}
                style={{ width: "100%", height: "100%" }}
              />
              {/* <Mapgakco
                center={center}
                userImageUrl={currentUser.introduction.profileImgUrl}
              /> */}
            </MapgakcoWrapper>
            <GatherListWrapper filter={filter}>
              <GatherList gatherData={gathers} />
            </GatherListWrapper>
          </SubContents>
        </MapgakcoAndGatherListContainer>
      </Contents>
    </Container>
  );
};

export default Main;
