import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import Button from "../base/Button";

interface Props {
  isLiked: boolean;
  onClick: (event: React.MouseEvent) => void;
}

const LikeButton = ({ isLiked, onClick }: Props) => {
  const icon = isLiked ? (
    <BsSuitHeartFill color="red" data-testid="filled" />
  ) : (
    <BsSuitHeart color="red" data-testid="empty" />
  );

  return (
    <Button name="like" onClick={onClick}>
      {icon}
    </Button>
  );
};

export default LikeButton;
