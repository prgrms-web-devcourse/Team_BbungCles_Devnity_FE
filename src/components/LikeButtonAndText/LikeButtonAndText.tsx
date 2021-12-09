import Text from "../base/Text";
import LikeButton from "../LikeButton/LikeButton";
import { Container } from "./styles";

interface Props {
  isLiked: boolean;
  likeCount: number;
  onClick: (event: React.MouseEvent) => void;
}

const LikeButtonAndText = ({ isLiked, likeCount, onClick }: Props) => {
  return (
    <Container>
      <LikeButton isLiked={isLiked} onClick={onClick} />
      <Text size={14}>{likeCount}</Text>
    </Container>
  );
};

export default LikeButtonAndText;
