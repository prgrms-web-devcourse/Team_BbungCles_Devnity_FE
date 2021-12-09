import { useCallback, useState } from "react";
import {
  Container,
  Label,
  TextArea,
  ButtonWrapper,
  SubmitButton,
} from "./styles";

interface Props {
  onSubmit: (arg: string) => void;
}

const CommentForm = ({ onSubmit }: Props) => {
  const [textValue, setTextValue] = useState("");

  const handleInputChange = useCallback(
    (value) => setTextValue(value),
    [textValue]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const sendValue = textValue;
      setTextValue("");
      onSubmit(sendValue);
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
