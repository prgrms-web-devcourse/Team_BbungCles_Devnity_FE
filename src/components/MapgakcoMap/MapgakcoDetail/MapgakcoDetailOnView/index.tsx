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
import MarkdownEditor from "../../../base/MarkdownEditor";
import {
  Card,
  MarkdownEditorWrapper,
  Footer,
  RegisterButton,
  EditButton,
  CancelButton,
} from "./styles";
import ParticipantList from "./ParticipantList/ParticipantList";

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
                <ParticipantList
                  author={mapgakcoDetail?.author}
                  applicants={mapgakcoDetail?.applicants}
                />
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
          <EditButton onClick={onEdit}>수정</EditButton>
        ) : hasApplied(myProfile, mapgakcoDetail) ? (
          <CancelButton onClick={handleCancelClick}>신청 취소</CancelButton>
        ) : (
          <RegisterButton
            isActive={!isFull(mapgakcoDetail)}
            disabled={isFull(mapgakcoDetail)}
            onClick={handleApplyClick}
          >
            신청
          </RegisterButton>
        )}
      </Footer>
    </>
  );
};

export default MapgakcoDetailOnView;
