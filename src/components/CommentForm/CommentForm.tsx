import { useCallback, useState } from "react";
import {
  CommentContainer,
  CommentWrapper,
  Label,
  TextArea,
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
    <CommentContainer>
      <CommentWrapper>
        <Label>댓글</Label>
        <TextArea value={textValue} onChange={handleInputChange} />
        <SubmitButton onClick={handleSubmit}>등록</SubmitButton>
      </CommentWrapper>
    </CommentContainer>
  );
};

export default CommentForm;
