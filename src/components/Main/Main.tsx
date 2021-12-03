import randomUserInfo, { userInfoType } from "../../../fixtures/userInfo";
import Logo from "../Logo/Logo";
import {
  Contents,
  GatherListSummary,
  Header,
  MainWrapper,
  MapgakcoAndGatherListWrapper,
  MapgakcoSummary,
  SelfIntroduce,
  Title,
} from "./styles";

interface Props {
  userInfo: userInfoType;
}

const UserProfileImage = () => {
  return (
    <Logo
      width={32}
      borderRadius="50%"
      imageUrl="https://source.unsplash.com/100x100?1"
    />
  );
};

const UserCardItem = ({ userInfo }: Props) => {
  return <li>{JSON.stringify(userInfo)}</li>;
};

const Mapgakco = () => {
  return <div>맵</div>;
};

const GatherList = () => {
  return <div>모집 목록</div>;
};

const Main = () => {
  // TODO: 모킹 데이터이므로 API 연동이 완료되면 API 데이터로 교체한다.
  const userInfos = Array.from({ length: 3 }, () => randomUserInfo());

  return (
    <MainWrapper>
      <Header>
        헤더
        <UserProfileImage />
      </Header>
      <Contents>
        <SelfIntroduce>
          <Title>자기소개</Title>
          <ul>
            {userInfos.map((userInfo) => (
              <UserCardItem key={userInfo.user.userId} userInfo={userInfo} />
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
    </MainWrapper>
  );
};

export default Main;
