import { MouseEvent, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { common, routes } from "../../constants";
import Image from "../base/Image";
import Text from "../base/Text";
import CommentButtonAndText from "../CommentButtonAndText/CommentButtonAndText";
import LikeButtonAndText from "../LikeButtonAndText/LikeButtonAndText";
import { User } from "../UserList/types";
import {
  Container,
  ImageWrapper,
  TextContainer,
  LikeAndCommentContainer,
  DescriptionContainer,
  DescriptionWrapper,
} from "./styles";

interface IProps {
  user: User;
}

const ProfileCard = ({ user }: IProps) => {
  const history = useHistory();
  const handleClick = useCallback(
    (introductionId) => (event: MouseEvent<HTMLDivElement>) => {
      event.preventDefault();

      if (introductionId) {
        history.push(`${routes.USERLIST}/${introductionId}`);
      }
    },
    [history]
  );

  return (
    <Container>
      <ImageWrapper onClick={handleClick(user.introduction.introductionId)}>
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
          {user.introduction.summary || "아직 한 줄 소개가 없어요"}
        </Text>
      </TextContainer>

      <LikeAndCommentContainer>
        <LikeButtonAndText
          isLiked
          likeCount={user.introduction.likeCount}
          onClick={handleClick(user?.introduction.introductionId)}
        />
        <CommentButtonAndText
          commentCount={user.introduction.commentCount}
          onClick={handleClick(user?.introduction.introductionId)}
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
