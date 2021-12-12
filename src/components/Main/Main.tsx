import { gathers } from "../../../fixtures/gather";
import { center } from "../../../fixtures/map";
import randomUserInfo from "../../../fixtures/userInfo";
import Text from "../base/Text";
import GatherList from "../GatherList/GatherList";
import Mapgakco from "../Mapgakco/Mapgakco";
import UserCard from "../UserCard/UserCard";
import UserImageAndDropdownContainer from "../UserImageAndDropdown/UserImageAndDropdownContainer";
import {
  Contents,
  GatherListSummary,
  Header,
  Container,
  MapgakcoAndGatherListWrapper,
  MapgakcoSummary,
  SelfIntroduce,
  MapgakcoContainerWrapper,
} from "./styles";

const Main = () => {
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
        <MapgakcoAndGatherListWrapper>
          <MapgakcoSummary>
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
      </Contents>
    </Container>
  );
};

export default Main;
