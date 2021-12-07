import randomUserInfo from "../../../fixtures/userInfo";
import Logo from "../Logo/Logo";
import UserCard from "../UserCard/UserCard";
import {
  Contents,
  GatherListSummary,
  Header,
  Container,
  MapgakcoAndGatherListWrapper,
  MapgakcoSummary,
  SelfIntroduce,
  Title,
} from "./styles";

const UserProfileImage = () => {
  return (
    <Logo
      width={32}
      borderRadius="50%"
      imageUrl="https://source.unsplash.com/100x100?1"
    />
  );
};

const Mapgakco = () => {
  return <div>맵</div>;
};

const GatherList = () => {
  return <div>모집 목록</div>;
};

const Main = () => {
  // TODO: 모킹 데이터이므로 API 연동이 완료되면 API 데이터로 교체한다.
  const userInfos = Array.from({ length: 10 }, () => randomUserInfo());

  return (
    <Container>
      <Header>
        헤더
        <UserProfileImage />
      </Header>
      <Contents>
        <SelfIntroduce>
          <Title>자기소개</Title>
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
            <Title>맵각코 요약</Title>
            <Mapgakco />
          </MapgakcoSummary>
          <GatherListSummary>
            <Title>모집게시판</Title>
            <GatherList />
          </GatherListSummary>
        </MapgakcoAndGatherListWrapper>
      </Contents>
    </Container>
  );
};

export default Main;
