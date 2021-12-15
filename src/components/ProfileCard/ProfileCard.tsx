import styled from "@emotion/styled";
import { common } from "../../constants";
import Image from "../base/Image";
import Text from "../base/Text";
import CommentButtonAndText from "../CommentButtonAndText/CommentButtonAndText";
import LikeButtonAndText from "../LikeButtonAndText/LikeButtonAndText";
import { User } from "../UserList/types";

interface IProps {
  user: User;
}

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  max-width: 240px;
  height: 100%;
  justify-self: center;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.boxShadows.primary};
  cursor: pointer;
  overflow: hidden;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.5s;
  }
`;

const ImageWrapper = styled.div`
  flex-grow: 1;
  height: 216px;
  border-radius: 12px 12px 0 0;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 36px;
  padding: 0 8px;
  margin: 16px 0;
`;

const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 50px;
`;

const DescriptionWrapper = styled.div<{ course: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-self: center;
  background-color: ${({ theme, course }) =>
    theme.colors[common.colorMap[course]]};
  border-right: 1px solid ${({ theme }) => theme.colors.white};
  overflow: hidden;

  &:last-child {
    border-right: 0;
  }
`;

const LikeAndCommentContainer = styled.div`
  display: flex;
  padding: 0 8px;
  gap: 0 8px;
  margin-bottom: 8px;
`;

const ProfileCard = ({ user }: IProps) => {
  return (
    <Container>
      <ImageWrapper>
        <Image
          src={user.introduction.profileImgUrl || common.placeHolderImageSrc}
          width="100%"
          height="100%"
          mode="cover"
          alt="유저 섬네일 이미지"
        />
      </ImageWrapper>

      <TextContainer>
        <Text size={16} strong ellipsisLineClamp={2}>
          {user.introduction.summary}
        </Text>
      </TextContainer>

      <LikeAndCommentContainer>
        <LikeButtonAndText
          isLiked
          likeCount={user.introduction.likeCount}
          // TODO: API 연동 필요
          // eslint-disable-next-line
          onClick={() => console.log("like!")}
        />
        <CommentButtonAndText
          commentCount={user.introduction.commentCount}
          // TODO: API 연동 필요
          // eslint-disable-next-line
          onClick={() => console.log("comment!")}
        />
      </LikeAndCommentContainer>

      <DescriptionContainer>
        <DescriptionWrapper course={user.user.course}>
          <Text size={14} color="white" strong ellipsisLineClamp={1}>
            {user.user.course}
          </Text>
        </DescriptionWrapper>
        <DescriptionWrapper course={user.user.course}>
          <Text size={14} color="white" strong ellipsisLineClamp={1}>
            {user.user.name}
          </Text>
        </DescriptionWrapper>
        <DescriptionWrapper course={user.user.course}>
          <Text size={14} color="white" strong ellipsisLineClamp={1}>
            {`${user.user.generation}기`}
          </Text>
        </DescriptionWrapper>
      </DescriptionContainer>
    </Container>
  );
};

export default ProfileCard;
