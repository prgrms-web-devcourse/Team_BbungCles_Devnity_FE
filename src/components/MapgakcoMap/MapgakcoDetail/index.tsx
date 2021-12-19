import { useCallback, useState } from "react";
import { BsCalendarDate, BsPeople, BsPinMap } from "react-icons/bs";
import useClickAway from "../../../hooks/useClickAway";
import useToastUi from "../../../hooks/useToastUi";
import MarkdownEditor from "../../base/MarkdownEditor";
import { Card, Container, Footer, MarkdownEditorWrapper } from "./styles";
import { Mapgakco } from "../../../types/mapTypes";
import { koreanDate } from "../../../utils/date";
import Button from "../../base/Button";
import theme from "../../../assets/theme";
import useMapgakcoDetail from "../../../hooks/useMapgakcoDetail";

interface Props {
  mapgakcoId: string;
  onModalClose: () => void;
}

// const initialMapgakco: Mapgakco = {
//   mapgakcoId: 37,
//   status: "GATHERING",
//   title: "맵각코",
//   location: "맵각코 위치",
//   meetingAt: "2021-12-18T23:51:34",
//   latitude: 37.58009056466645,
//   longitude: 126.9228016641275,
//   applicantLimit: 5,
//   applicantCount: 1,
//   createdAt: "2021-12-18T23:51:34",
//   author: {
//     userId: 54,
//     name: "dummy1",
//     course: "FE",
//     generation: 1,
//     profileImgUrl: null,
//     role: "STUDENT",
//   },
// };

const MapgakcoDetail = ({ mapgakcoId, onModalClose }: Props) => {
  const [editorRef] = useToastUi();

  const [content, setContent] = useState("markdown content");

  const ref = useClickAway(() => {
    onModalClose();
  });

  const { data } = useMapgakcoDetail(mapgakcoId);

  const handleMarkdownChange = useCallback((markdownInnerText) => {
    setContent(markdownInnerText);
  }, []);

  const defaultButtonStyle = {
    padding: "8px",
    minWidth: "80px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    borderRadius: "8px",

    boxShadow: theme.boxShadows.primary,
  };

  const activeButtonStyle = {
    ...defaultButtonStyle,
    color: theme.colors.white,
    backgroundColor: theme.colors.markerBlue,
  };

  const inactiveButtonStyle = {
    ...defaultButtonStyle,
    color: theme.colors.white,
    backgroundColor: theme.colors.disabled,
  };

  if (!data) {
    return null;
  }

  const { mapgakco, author, applicants, comments } = data;

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
      <Footer>
        <Button style={activeButtonStyle} onClick={() => ({})}>
          신청
        </Button>
        <Button style={inactiveButtonStyle} onClick={() => ({})}>
          신청 취소
        </Button>
      </Footer>
    </Container>
  );
};

export default MapgakcoDetail;
