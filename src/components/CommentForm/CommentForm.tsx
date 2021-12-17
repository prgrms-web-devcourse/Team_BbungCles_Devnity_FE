import { useCallback, useState } from "react";
import {
  Container,
  Label,
  TextArea,
  ButtonWrapper,
  SubmitButton,
} from "./styles";

export interface SubmitProps {
  gatherId?: number;
  parentId?: number | null;
  content: string;
}
interface Props {
  onSubmit: (arg: SubmitProps) => void;
  gatherId?: number;
  parentId?: number | null;
}

const CommentForm = ({ onSubmit, gatherId, parentId }: Props) => {
  const [textValue, setTextValue] = useState("");

  const handleInputChange = useCallback((e) => {
    const { value } = e.target;
    setTextValue(value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit({ gatherId, parentId, content: textValue });
      setTextValue("");
    },
    [textValue]
  );

  return (
    <Container>
      <Label htmlFor="comment">댓글</Label>
      <TextArea id="comment" value={textValue} onChange={handleInputChange} />
      <ButtonWrapper>
        <SubmitButton onClick={handleSubmit}>등록</SubmitButton>
      </ButtonWrapper>
    </Container>
  );
};

export default CommentForm;
