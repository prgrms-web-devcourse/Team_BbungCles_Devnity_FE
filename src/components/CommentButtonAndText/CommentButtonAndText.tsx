import Text from "../base/Text";
import CommentButton from "../CommentButton/CommentButton";
import { Container } from "./styles";

interface Props {
  commentCount: number;
  onClick: (event: React.MouseEvent) => void;
}

const CommentButtonAndText = ({ commentCount, onClick }: Props) => {
  return (
    <Container>
      <CommentButton onClick={onClick} />
      <Text size={14}>{commentCount}</Text>
    </Container>
  );
};

export default CommentButtonAndText;
