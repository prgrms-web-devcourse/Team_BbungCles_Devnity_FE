import {
  Container,
  Footer,
  Header,
  ImageWrapper,
  Section,
  SummaryWrapper,
  TagWrapper,
} from "./styles";
import Text from "../base/Text";
import Image from "../base/Image";
import Tag from "../Tag/Tag";
import LikeButtonAndText from "../LikeButtonAndText/LikeButtonAndText";
import CommentButtonAndText from "../CommentButtonAndText/CommentButtonAndText";
import { tagName } from "../../constants";
import ProfileBox from "../ProfileBox/ProfileBox";
import { UserInfo } from "../../types/userInfo";

interface Props {
  userInfo: UserInfo;
  onClick?: (event: React.MouseEvent) => void;
}

const UserCard = ({ userInfo, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <Header>
        <ImageWrapper>
          <Image
            src={userInfo.introduction.profileImgUrl}
            width="100%"
            height="100%"
            mode="cover"
            alt="유저 섬네일 이미지"
          />
        </ImageWrapper>
      </Header>
      <Section>
        <ProfileBox
          name={userInfo.user.name}
          course={userInfo.user.course}
          generation={userInfo.user.generation}
        />
        <TagWrapper>
          <Tag size={14} name={tagName.ROLE} value={userInfo.user.role} />
          <Tag
            size={14}
            name={tagName.MBTI}
            value={userInfo.introduction.mbti}
          />
        </TagWrapper>
        <SummaryWrapper>
          <Text
            size={14}
            ellipsisLineClamp={1}
            style={{ whiteSpace: "nowrap" }}
          >
            {userInfo.introduction.summary || "아직 한 줄 소개가 없어요"}
          </Text>
        </SummaryWrapper>
      </Section>
      <Footer>
        <LikeButtonAndText
          isLiked={userInfo.introduction.isLike}
          likeCount={userInfo.introduction.likeCount}
          // TODO: API 연동이 완료되면 API 호출 로직으로 변경한다
          // eslint-disable-next-line no-console
          onClick={() => console.log("clicked")}
        />

        <CommentButtonAndText
          commentCount={userInfo.introduction.commentCount}
          // TODO: API 연동이 완료되면 API 호출 로직으로 변경한다
          // eslint-disable-next-line no-console
          onClick={() => console.log("clicked")}
        />
      </Footer>
    </Container>
  );
};

export default UserCard;
