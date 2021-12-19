import { useState } from "react";
import { BsCalendarDate, BsPeople, BsPinMap } from "react-icons/bs";
import useClickAway from "../../../hooks/useClickAway";
import useToastUi from "../../../hooks/useToastUi";
import MarkdownEditor from "../../base/MarkdownEditor";
import { Card, Container, MarkdownEditorWrapper } from "./styles";

interface Props {
  onClose: () => void;
}

const MapgakcoDetail = ({ onClose }: Props) => {
  const [editorRef] = useToastUi();

  const [content, setContent] = useState("markdown content");

  const ref = useClickAway(() => {
    onClose();
  });

  return (
    <Container ref={ref}>
      <Card>
        <div className="poster">
          <h2 className="location">GATHERING</h2>
          <h1 className="title">자바스크립트 스터디</h1>
          <p className="details">
            <span className="row">
              <BsCalendarDate />
              <span className="row-item">12월 28일 11PM</span>
            </span>
            <span className="row">
              <BsPinMap />
              <span className="row-item">
                <strong>상세 장소</strong>
              </span>
            </span>
            <span className="row">
              <BsPeople />
              <span className="row-item">
                <strong>4 / 6 명</strong>
              </span>
            </span>
          </p>
        </div>
        <MarkdownEditorWrapper>
          <MarkdownEditor
            isViewMode={false}
            editorRef={editorRef}
            value={content}
          />
        </MarkdownEditorWrapper>
      </Card>
    </Container>
  );
};

export default MapgakcoDetail;
