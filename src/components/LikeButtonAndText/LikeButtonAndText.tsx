import Text from "../base/Text";
import LikeButton from "../LikeButton/LikeButton";
import { Container } from "./styles";

interface Props {
  isLiked: boolean;
  likeCount: number;
  onClick: (event: React.MouseEvent) => void;
  textSize?: string | number;
}

const LikeButtonAndText = ({
  isLiked,
  likeCount,
  onClick,
  textSize = 14,
}: Props) => {
  return (
    <Container>
      <LikeButton size={textSize} isLiked={isLiked} onClick={onClick} />
      <Text size={textSize}>{likeCount}</Text>
    </Container>
  );
};

export default LikeButtonAndText;
