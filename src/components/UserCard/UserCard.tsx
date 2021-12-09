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
import { userInfoType } from "../../../fixtures/userInfo";
import CommentButtonAndText from "../CommentButtonAndText/CommentButtonAndText";
import { tagName } from "../../constants";

interface Props {
  userInfo: userInfoType;
  onClick?: (event: React.MouseEvent) => void;
}

const UserCard = ({ userInfo, onClick }: Props) => {
  const userNamePlate = `${userInfo.user.name} (${userInfo.user.course} - ${userInfo.user.generation})`;

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
        <Text size={16} ellipsisLineClamp={1}>
          {userNamePlate}
        </Text>
        <TagWrapper>
          <Tag size={14} name={tagName.ROLE} value={userInfo.user.role} />
          <Tag
            size={14}
            name={tagName.MBTI}
            value={userInfo.introduction.mbti}
          />
        </TagWrapper>
        <SummaryWrapper>
          <Text size={14} ellipsisLineClamp={1}>
            {userInfo.introduction.summary}
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
