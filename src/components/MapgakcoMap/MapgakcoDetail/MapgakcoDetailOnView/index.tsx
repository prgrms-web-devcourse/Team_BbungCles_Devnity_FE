// TODO: any를 지운다.
/* eslint-disable @typescript-eslint/no-explicit-any */
import { BsCalendarDate, BsPeople, BsPinMap } from "react-icons/bs";
import { toast } from "react-toastify";
import theme from "../../../../assets/theme";
import { status } from "../../../../constants";
import useMutationMapgakcoApplyDelete from "../../../../hooks/useMutationMapgakcoApplyDelete";
import useMutationMapgakcoApplyPost from "../../../../hooks/useMutationMapgakcoApplyPost";
import useToastUi from "../../../../hooks/useToastUi";
import { ResponseGetMapgakcoDetail } from "../../../../types/mapgakco";
import { koreanDate } from "../../../../utils/date";
import Button from "../../../base/Button";
import MarkdownEditor from "../../../base/MarkdownEditor";
import UserProfileImage from "../../../UserProfileImage/UserProfileImage";
import { Card, MarkdownEditorWrapper, Footer } from "./styles";

interface Props {
  mapgakcoDetail: ResponseGetMapgakcoDetail;
  myProfile: any;
  onEdit: () => void;
}

const isAuthor = (myProfile, mapgakcoDetail: ResponseGetMapgakcoDetail) => {
  return myProfile?.user?.userId === mapgakcoDetail?.author?.userId;
};

const hasApplied = (myProfile, mapgakcoDetail: ResponseGetMapgakcoDetail) => {
  const applicantsIds = mapgakcoDetail?.applicants?.map(({ userId }) => userId);

  return applicantsIds.some((id) => id === myProfile?.user?.userId);
};

const isFull = (mapgakcoDetail: ResponseGetMapgakcoDetail) => {
  return mapgakcoDetail?.mapgakco.status === status.FULL;
};

const MapgakcoDetailOnView = ({ mapgakcoDetail, myProfile, onEdit }: Props) => {
  const [editorRef] = useToastUi();

  const { mutate: applyPost } = useMutationMapgakcoApplyPost(
    mapgakcoDetail?.mapgakco?.mapgakcoId
  );

  const { mutate: applyDelete } = useMutationMapgakcoApplyDelete(
    mapgakcoDetail?.mapgakco?.mapgakcoId
  );

  const handleApplyClick = () => {
    applyPost({});
    toast("신청이 완료되었습니다.");
  };

  const handleCancelClick = () => {
    applyDelete({});
    toast("신청이 취소되었습니다.");
  };

  const bgColorByStatus = {
    [status.GATHERING]: theme.colors.markerBlue,
    [status.FULL]: "#134f5b",
    [status.CLOSED]: theme.colors.disabled,
    [status.DELETED]: theme.colors.scarlet,
  };

  const cardStyle = {
    backgroundColor:
      bgColorByStatus[mapgakcoDetail?.mapgakco?.status || status.GATHERING],
  };

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

  const cancelButtonStyle = {
    ...defaultButtonStyle,
    color: theme.colors.white,
    backgroundColor: theme.colors.scarlet,
  };

  return (
    <>
      <Card style={cardStyle}>
        <div className="poster">
          <h2 className="status">{mapgakcoDetail?.mapgakco?.status}</h2>
          <h1 className="title">{mapgakcoDetail?.mapgakco?.title}</h1>
          <div className="details">
            <div className="row">
              <BsCalendarDate />
              <span className="row-item">
                {koreanDate(new Date(mapgakcoDetail?.mapgakco?.meetingAt))}
              </span>
            </div>
            <div className="row">
              <BsPinMap />
              <span className="row-item">
                <strong>{mapgakcoDetail?.mapgakco?.location}</strong>
              </span>
            </div>
            <div className="row">
              <BsPeople />
              <div className="row-item">
                <strong>
                  {mapgakcoDetail?.mapgakco?.applicantCount} /{" "}
                  {mapgakcoDetail?.mapgakco?.applicantLimit} 명
                </strong>
                <ul className="participants" style={{ display: "flex" }}>
                  <li
                    className="participant author"
                    key={mapgakcoDetail?.author?.userId}
                  >
                    <UserProfileImage
                      title={mapgakcoDetail?.author?.name}
                      imageUrl={mapgakcoDetail?.author?.profileImgUrl}
                      size={24}
                      style={{ border: "1px solid #fff" }}
                    />
                  </li>
                  {mapgakcoDetail?.applicants?.map(
                    ({ userId, name, profileImgUrl }) => (
                      <li key={userId} className="participant">
                        <UserProfileImage
                          title={name}
                          imageUrl={profileImgUrl}
                          size={24}
                          style={{ border: "1px solid #fff" }}
                        />
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
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
          <Button style={cancelButtonStyle} onClick={handleCancelClick}>
            신청 취소
          </Button>
        ) : (
          <Button
            style={
              isFull(mapgakcoDetail) ? inactiveButtonStyle : activeButtonStyle
            }
            disabled={isFull(mapgakcoDetail)}
            onClick={handleApplyClick}
          >
            신청
          </Button>
        )}
      </Footer>
    </>
  );
};

export default MapgakcoDetailOnView;
