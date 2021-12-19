import { useCallback, useState } from "react";
import { BsCalendarDate, BsPeople, BsPinMap } from "react-icons/bs";
import { useRecoilValue } from "recoil";
import useClickAway from "../../../hooks/useClickAway";
import useToastUi from "../../../hooks/useToastUi";
import MarkdownEditor from "../../base/MarkdownEditor";
import { Card, Container, Footer, MarkdownEditorWrapper } from "./styles";
import { koreanDate } from "../../../utils/date";
import Button from "../../base/Button";
import theme from "../../../assets/theme";
import useMapgakcoDetailQuery from "../../../hooks/useMapgakcoDetailQuery";
import { globalMyProfile } from "../../../atoms";

interface Props {
  mapgakcoId: string;
  onModalClose: () => void;
}

const isAuthor = (myProfile, mapgakcoDetail) => {
  return myProfile?.user?.userId === mapgakcoDetail?.author?.userId;
};

const hasApplied = (myProfile, mapgakcoDetail) => {
  const applicantsIds = mapgakcoDetail?.applicants?.map(({ userId }) => userId);

  return applicantsIds.some((id) => id === myProfile?.user?.userId);
};

const MapgakcoDetail = ({ mapgakcoId, onModalClose }: Props) => {
  const [editorRef] = useToastUi();

  const [content, setContent] = useState("markdown content");

  const ref = useClickAway(() => {
    onModalClose();
  });

  const myProfile = useRecoilValue(globalMyProfile);

  const { isLoading, data: mapgakcoDetail } =
    useMapgakcoDetailQuery(mapgakcoId);

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

  return (
    <Container ref={ref}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Card>
            <div className="poster">
              <h2 className="status">{mapgakcoDetail?.mapgakco?.status}</h2>
              <h1 className="title">{mapgakcoDetail?.mapgakco?.title}</h1>
              <p className="details">
                <span className="row">
                  <BsCalendarDate />
                  <span className="row-item">
                    {koreanDate(new Date(mapgakcoDetail?.mapgakco?.meetingAt))}
                  </span>
                </span>
                <span className="row">
                  <BsPinMap />
                  <span className="row-item">
                    <strong>{mapgakcoDetail?.mapgakco?.location}</strong>
                  </span>
                </span>
                <span className="row">
                  <BsPeople />
                  <span className="row-item">
                    <strong>
                      {mapgakcoDetail?.mapgakco?.applicantCount} /{" "}
                      {mapgakcoDetail?.mapgakco?.applicantLimit} 명
                    </strong>
                  </span>
                </span>
              </p>
            </div>
          </Card>
          <MarkdownEditorWrapper>
            <MarkdownEditor
              // isViewMode={!isAuthor(myProfile, mapgakcoDetail)}
              isViewMode
              editorRef={editorRef}
              value={content}
              setEditorText={handleMarkdownChange}
            />
            {JSON.stringify(myProfile.user.userId)}
            {JSON.stringify(mapgakcoDetail.author.userId)}
          </MarkdownEditorWrapper>
          <Footer>
            {isAuthor(myProfile, mapgakcoDetail) ? (
              <Button style={activeButtonStyle} onClick={() => ({})}>
                수정
              </Button>
            ) : hasApplied(myProfile, mapgakcoDetail) ? (
              <Button style={activeButtonStyle} onClick={() => ({})}>
                신청
              </Button>
            ) : (
              <Button style={inactiveButtonStyle} onClick={() => ({})}>
                신청 취소
              </Button>
            )}
          </Footer>
        </>
      )}
    </Container>
  );
};

export default MapgakcoDetail;
