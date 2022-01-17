import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import IconButton from "../base/IconButton";

interface Props {
  isLiked: boolean;
  onClick: (event: React.MouseEvent) => void;
  size?: string | number;
}

const LikeButton = ({ isLiked, onClick, size = 14 }: Props) => {
  const icon = isLiked ? (
    <BsSuitHeartFill color="red" size={size} data-testid="filled" />
  ) : (
    <BsSuitHeart color="red" size={size} data-testid="empty" />
  );

  return (
    <IconButton name="like" onClick={onClick}>
      {icon}
    </IconButton>
  );
};

export default LikeButton;
