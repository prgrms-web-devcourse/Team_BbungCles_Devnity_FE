import { BsFillKeyboardFill } from "react-icons/bs";
import { MdDeleteSweep, MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { useRecoilValue } from "recoil";
import { useCallback } from "react";
import {
  Container,
  ButtonContainer,
  CommentContainer,
  ContentContainer,
  IconButton,
  ImageWrapper,
  ProfileContainer,
  TextContainer,
} from "./styles";
import { Comment } from "../types";
import Image from "../../base/Image";
import Text from "../../base/Text";
import { common } from "../../../constants";
import theme from "../../../assets/theme";
import { globalMyProfile } from "../../../atoms";
import useToggle from "../../../hooks/useToggle";

interface IProps {
  comment: Comment;
  isChild: boolean;
}

const Comment = ({ comment, isChild }: IProps) => {
  const myProfile = useRecoilValue(globalMyProfile);
  const [isTriggered, toggle] = useToggle(false);
  const handleModifyClick = useCallback(() => {
    toggle();
  }, [toggle]);

  return (
    <Container>
      <CommentContainer>
        <ProfileContainer>
          {isChild && <MdOutlineSubdirectoryArrowRight size={28} />}

          <ImageWrapper>
            <Image
              src={comment.writer.profileImgUrl || common.placeHolderImageSrc}
              width={36}
              height={36}
              alt="프로필"
              mode="cover"
            />
          </ImageWrapper>

          <TextContainer />
        </ProfileContainer>
        <ContentContainer>
          <TextContainer>
            <Text size={20} strong>
              {comment.writer.name}
            </Text>
            <Text size={16} color={theme.colors.gray500}>
              {`${common.courseMap[comment.writer.course]} / ${
                comment.writer.generation
              }기`}
            </Text>
          </TextContainer>

          {comment.content}
        </ContentContainer>

        {myProfile.user.userId === comment.writer.userId && (
          <ButtonContainer>
            <IconButton role="button" onClick={handleModifyClick}>
              <BsFillKeyboardFill size={28} />
            </IconButton>

            <IconButton role="button">
              <MdDeleteSweep size={28} />
            </IconButton>
          </ButtonContainer>
        )}
      </CommentContainer>

      {isTriggered && <input />}
    </Container>
  );
};

export default Comment;
