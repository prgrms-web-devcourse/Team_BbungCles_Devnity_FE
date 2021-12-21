import styled from "@emotion/styled";
import { BiComment } from "react-icons/bi";
import { breakpoints } from "../../assets/media";
import Text from "../base/Text";

interface Props {
  commentCount: number;
  iconSize?: string | number;
  iconColor?: string;
  fontSize?: number;
  fontColor?: string;
}

const Container = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;

  ${breakpoints.maxMobile} {
    display: none;
  }
`;

const CommentText = ({
  commentCount,
  iconSize = 12,
  iconColor,
  fontSize,
  fontColor,
}: Props) => {
  return (
    <Container>
      <BiComment size={iconSize} color={iconColor} />
      <Text size={fontSize} color={fontColor}>
        {commentCount}
      </Text>
    </Container>
  );
};

export default CommentText;
