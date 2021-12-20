// TODO: any를 지운다.
/* eslint-disable @typescript-eslint/no-explicit-any */
import { BsCalendarDate, BsPeople, BsPinMap } from "react-icons/bs";
import theme from "../../../../assets/theme";
import useToastUi from "../../../../hooks/useToastUi";
import { koreanDate } from "../../../../utils/date";
import Button from "../../../base/Button";
import MarkdownEditor from "../../../base/MarkdownEditor";
import { Card, MarkdownEditorWrapper, Footer } from "./styles";

interface Props {
  mapgakcoDetail: any;
  myProfile: any;
  onEdit: () => void;
}

const isAuthor = (myProfile, mapgakcoDetail) => {
  return myProfile?.user?.userId === mapgakcoDetail?.author?.userId;
};

const hasApplied = (myProfile, mapgakcoDetail) => {
  const applicantsIds = mapgakcoDetail?.applicants?.map(({ userId }) => userId);

  return applicantsIds.some((id) => id === myProfile?.user?.userId);
};

const MapgakcoDetailOnView = ({ mapgakcoDetail, myProfile, onEdit }: Props) => {
  const [editorRef] = useToastUi();

  const defaultButtonStyle = {
    padding: "8px",
    minWidth: "80px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    borderRadius: "8px",
    outline: 0,
    border: 0,
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
          isViewMode
          editorRef={editorRef}
          value={mapgakcoDetail?.mapgakco?.content}
        />
      </MarkdownEditorWrapper>
      <Footer>
        {isAuthor(myProfile, mapgakcoDetail) ? (
          <Button style={activeButtonStyle} onClick={onEdit}>
            수정
          </Button>
        ) : hasApplied(myProfile, mapgakcoDetail) ? (
          <Button style={inactiveButtonStyle} onClick={() => ({})}>
            신청 취소
          </Button>
        ) : (
          <Button style={activeButtonStyle} onClick={() => ({})}>
            신청
          </Button>
        )}
      </Footer>
    </>
  );
};

export default MapgakcoDetailOnView;
