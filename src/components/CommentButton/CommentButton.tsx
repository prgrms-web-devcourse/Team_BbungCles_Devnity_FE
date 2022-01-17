import { BiComment } from "react-icons/bi";
import IconButton from "../base/IconButton";

interface Props {
  onClick: (event: React.MouseEvent) => void;
}

const CommentButton = ({ onClick }: Props) => {
  const icon = <BiComment data-testid="filled" />;

  return (
    <IconButton name="comment" onClick={onClick}>
      {icon}
    </IconButton>
  );
};

export default CommentButton;
