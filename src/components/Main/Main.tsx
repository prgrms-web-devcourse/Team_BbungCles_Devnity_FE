import { Map, MapMarker } from "react-kakao-maps-sdk";

import randomUserInfo from "../../../fixtures/userInfo";
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
  Title,
} from "./styles";

const Mapgakco = () => {
  return (
    <Map
      center={{ lat: 33.5563, lng: 126.79581 }}
      style={{ width: "100%", height: "360px" }}
    >
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{ color: "#000" }}>Hello World!</div>
      </MapMarker>
    </Map>
  );
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
        <UserImageAndDropdownContainer imageUrl="http://placeimg.com/640/480" />
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
