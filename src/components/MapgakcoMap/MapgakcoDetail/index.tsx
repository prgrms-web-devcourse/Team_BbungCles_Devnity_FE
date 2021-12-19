import { useCallback, useState } from "react";
import { BsCalendarDate, BsPeople, BsPinMap } from "react-icons/bs";
import useClickAway from "../../../hooks/useClickAway";
import useToastUi from "../../../hooks/useToastUi";
import MarkdownEditor from "../../base/MarkdownEditor";
import { Card, Container, MarkdownEditorWrapper } from "./styles";
import { Mapgakco } from "../../../types/mapTypes";
import { koreanDate } from "../../../utils/date";

interface Props {
  mapgakco: Mapgakco;
  onModalClose: () => void;
}

const initialMapgakco: Mapgakco = {
  mapgakcoId: 37,
  status: "GATHERING",
  title: "맵각코",
  location: "맵각코 위치",
  meetingAt: "2021-12-18T23:51:34",
  latitude: 37.58009056466645,
  longitude: 126.9228016641275,
  applicantLimit: 5,
  applicantCount: 1,
  createdAt: "2021-12-18T23:51:34",
  author: {
    userId: 54,
    name: "dummy1",
    course: "FE",
    generation: 1,
    profileImgUrl: null,
    role: "STUDENT",
  },
};

const MapgakcoDetail = ({
  mapgakco = initialMapgakco,
  onModalClose,
}: Props) => {
  const [editorRef] = useToastUi();

  const [content, setContent] = useState("markdown content");

  const ref = useClickAway(() => {
    onModalClose();
  });

  const handleMarkdownChange = useCallback((markdownInnerText) => {
    setContent(markdownInnerText);
  }, []);

  if (!mapgakco) {
    return null;
  }

  return (
    <Container ref={ref}>
      <Card>
        <div className="poster">
          <h2 className="status">{mapgakco?.status}</h2>
          <h1 className="title">{mapgakco?.title}</h1>
          <p className="details">
            <span className="row">
              <BsCalendarDate />
              <span className="row-item">
                {koreanDate(new Date(mapgakco?.meetingAt))}
              </span>
            </span>
            <span className="row">
              <BsPinMap />
              <span className="row-item">
                <strong>{mapgakco?.location}</strong>
              </span>
            </span>
            <span className="row">
              <BsPeople />
              <span className="row-item">
                <strong>
                  {mapgakco?.applicantCount} / {mapgakco?.applicantLimit} 명
                </strong>
              </span>
            </span>
          </p>
        </div>
      </Card>
      <MarkdownEditorWrapper>
        {/* 신청자 */}
        {/* <MarkdownEditor isViewMode editorRef={editorRef} value={content} /> */}
        <MarkdownEditor
          isViewMode={false}
          editorRef={editorRef}
          value={content}
          setEditorText={handleMarkdownChange}
        />
      </MarkdownEditorWrapper>
    </Container>
  );
};

export default MapgakcoDetail;
