import { useState } from "react";
import { BsCalendarDate, BsPeople, BsPinMap } from "react-icons/bs";
import useClickAway from "../../../hooks/useClickAway";
import useToastUi from "../../../hooks/useToastUi";
import MarkdownEditor from "../../base/MarkdownEditor";
import { Card, Container, MarkdownEditorWrapper } from "./styles";

interface Props {
  onModalClose: () => void;
}

const MapgakcoDetail = ({ onModalClose }: Props) => {
  const [editorRef] = useToastUi();

  const [content, setContent] = useState("markdown content");

  const ref = useClickAway(() => {
    onModalClose();
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
      </Card>
      <MarkdownEditorWrapper>
        <MarkdownEditor
          isViewMode={false}
          editorRef={editorRef}
          value={content}
        />
      </MarkdownEditorWrapper>
    </Container>
  );
};

export default MapgakcoDetail;
