import { BiComment } from "react-icons/bi";
import Button from "../base/OldButton";

interface Props {
  onClick: (event: React.MouseEvent) => void;
}

const CommentButton = ({ onClick }: Props) => {
  const icon = <BiComment data-testid="filled" />;

  return (
    <Button name="comment" onClick={onClick}>
      {icon}
    </Button>
  );
};

export default CommentButton;
