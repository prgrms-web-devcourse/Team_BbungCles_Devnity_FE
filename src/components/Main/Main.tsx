import { useState } from "react";
import { center } from "../../../fixtures/map";
import theme from "../../assets/theme";
import { common } from "../../constants";
import { Gather } from "../../types/gather";
import { UserInfo } from "../../types/userInfo";
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

interface Props {
  currentUser: UserInfo;
  userSuggestions: UserInfo[];
  gatherSuggestions: Gather[];
}

const Main = ({ currentUser, userSuggestions, gatherSuggestions }: Props) => {
  const [filter, setFilter] = useState(FILTER_MAPGAKCO);

  return (
    <Container>
      <Header>
        <UserImageAndDropdownContainer
          imageUrl={
            currentUser?.introduction.profileImgUrl ||
            common.placeHolderImageSrc
          }
        />
      </Header>
      <Contents>
        <SelfIntroduce>
          <Text strong size={18}>
            자기소개
          </Text>
          <ul>
            {userSuggestions?.map((userInfo) => (
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
              {/* <Map
                center={{
                  lat: center.latitude,
                  lng: center.longitude,
                }}
                style={{ width: "100%", height: "100%" }}
              /> */}
              <Mapgakco
                center={center}
                userImageUrl={
                  currentUser?.introduction.profileImgUrl ||
                  common.placeHolderImageSrc
                }
              />
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
