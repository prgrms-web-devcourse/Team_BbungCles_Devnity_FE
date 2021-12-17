import { useRecoilValue } from "recoil";
import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { Props } from "./types";
import Text from "../base/Text";
import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment";
import ProfileBox from "../ProfileBox/ProfileBox";
import Input from "../base/Input";
import { globalMyProfile } from "../../atoms";
import {
  Container,
  Category,
  UserContainer,
  DetailContainer,
  TextContainer,
  ButtonContainer,
  CategoryWrapper,
  EditDeadlineContainer,
  Select,
  EditContainer,
  ApplicantContainer,
} from "./styles";
import theme from "../../assets/theme";
import {
  categoryDisplayName,
  gatherDisplayStatus,
  gatherStatus,
} from "../../constants";
import MarkdownEditor from "../base/MarkdownEditor";
import useToastUi from "../../hooks/useToastUi";
import { MarkdownEditorWrapper } from "../MyProfile/styles";
import ViewText from "../ViewText";
import PeriodText from "../PeriodText";

const GatherDetail = ({
  gatherData,
  handleGatherDelete,
  handleGatherClose,
  handleGatherApply,
  handleGatherCancel,
  handleCommentSubmit,
  handleCommentDelete,
  handleCommentEdit,
  handleGatherDetailEdit,
}: Props): JSX.Element => {
  const {
    gatherId,
    status,
    category,
    title,
    author,
    createdAt,
    // TODO: 수정됐을 경우 수정됨이 보이도록 한다.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    modifiedAt,
    deadline,
    view,
    applicantLimit,
    applicantCount,
    participants,
    content,
    commentCount,
    isApplied,
    comments,
  } = gatherData;

  const [editorRef] = useToastUi();

  const [editValue, setEditValue] = useState({
    title,
    content,
    category,
    deadline: deadline.substring(0, 10),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditValue({
      ...editValue,
      [name]: value,
    });
  };

  const myProfile = useRecoilValue(globalMyProfile);

  const isAuthor = myProfile?.user?.userId === author?.userId;

  return (
    <Container>
      <CategoryWrapper>
        {status !== gatherStatus.GATHERING ? (
          <Category>
            <Text size={12} color={theme.colors.white}>
              {gatherDisplayStatus[status]}
            </Text>
          </Category>
        ) : undefined}
        {isAuthor ? (
          <EditContainer>
            <label
              htmlFor="category"
              style={{ fontSize: "18px", fontWeight: 700 }}
            >
              카테고리
            </label>
            <Select
              name="category"
              value={editValue.category}
              onChange={handleChange}
            >
              <option value={category}>{categoryDisplayName[category]}</option>
              {Object.keys(categoryDisplayName).map((item) =>
                item !== category ? (
                  <option key={item} value={item}>
                    {categoryDisplayName[item]}
                  </option>
                ) : undefined
              )}
            </Select>
          </EditContainer>
        ) : (
          <Category>
            <Text size={12} color={theme.colors.white}>
              {categoryDisplayName[category]}
            </Text>
          </Category>
        )}
      </CategoryWrapper>
      {isAuthor ? (
        <EditContainer>
          <label htmlFor="title" style={{ fontSize: "18px", fontWeight: 700 }}>
            제목
          </label>
          <Input
            type="text"
            name="title"
            onChange={handleChange}
            value={editValue.title}
          />
        </EditContainer>
      ) : (
        <Text size={24} strong>
          {title}
        </Text>
      )}
      <UserContainer>
        <ProfileBox
          src={author?.profileImgUrl}
          alt="프로필"
          name={author.name}
          course={author.course}
          generation={author.generation}
          fontSize={16}
        />
        <Text>{createdAt.substring(0, 10)}</Text>
        <ViewText
          view={view}
          iconColor={theme.colors.gray500}
          fontColor={theme.colors.gray600}
        />
      </UserContainer>
      <DetailContainer>
        <TextContainer>
          <Text size={18} strong>
            모집 기간
          </Text>
          {isAuthor ? (
            <EditDeadlineContainer>
              <Text>{`${createdAt.substring(0, 10)} ~ `}</Text>
              <Input
                type="text"
                name="deadline"
                onChange={handleChange}
                value={editValue.deadline}
                customStyle={{ width: "30%" }}
              />
            </EditDeadlineContainer>
          ) : (
            <PeriodText
              createdDate={createdAt.substring(0, 10)}
              deadLine={deadline.substring(0, 10)}
            />
          )}
        </TextContainer>
        <TextContainer>
          <Text size={18} strong>
            모집 인원
          </Text>
          <Text>{`${applicantLimit}명`}</Text>
        </TextContainer>
        <TextContainer>
          <Text size={18} strong>
            신청 인원
          </Text>
          <Text>{`${applicantCount}명`}</Text>
          {participants?.map((applicant) => {
            return (
              <ApplicantContainer key={applicant.name}>
                <BsFillPersonFill />
                <ProfileBox
                  src={applicant.profileImgUrl}
                  alt="프로필"
                  name={applicant.name}
                  course={applicant.course}
                  generation={applicant.generation}
                  fontSize={14}
                />
              </ApplicantContainer>
            );
          })}
        </TextContainer>
        <TextContainer>
          <Text size={18} strong>
            상세 내용
          </Text>
          {isAuthor ? (
            <MarkdownEditorWrapper>
              <MarkdownEditor
                editorRef={editorRef}
                setEditorText={(value: string) =>
                  setEditValue({ ...editValue, content: value })
                }
                value={editValue.content || ""}
              />
            </MarkdownEditorWrapper>
          ) : (
            <MarkdownEditorWrapper>
              <MarkdownEditor
                isViewMode
                editorRef={editorRef}
                setEditorText={(value: string) =>
                  setEditValue({ ...editValue, content: value })
                }
                value={content || ""}
              />
            </MarkdownEditorWrapper>
          )}
        </TextContainer>
        <ButtonContainer>
          {!isAuthor && !isApplied && status === gatherStatus.GATHERING ? (
            <button type="button" onClick={() => handleGatherApply(gatherId)}>
              신청
            </button>
          ) : undefined}
          {!isAuthor && isApplied && status !== gatherStatus.DELETED ? (
            <button type="button" onClick={() => handleGatherCancel(gatherId)}>
              취소
            </button>
          ) : undefined}
          {isAuthor &&
          (status === gatherStatus.GATHERING ||
            status === gatherStatus.FULL) ? (
            <>
              <button
                type="button"
                onClick={() =>
                  handleGatherDetailEdit({ ...editValue, gatherId })
                }
              >
                수정
              </button>
              <button type="button" onClick={() => handleGatherClose(gatherId)}>
                마감
              </button>
            </>
          ) : undefined}
          {isAuthor && status !== gatherStatus.DELETED ? (
            <button type="button" onClick={() => handleGatherDelete(gatherId)}>
              삭제
            </button>
          ) : undefined}
        </ButtonContainer>
      </DetailContainer>
      <CommentForm onSubmit={handleCommentSubmit} gatherId={gatherId} />
      {commentCount
        ? comments?.map((comment) => (
            <Comment
              key={comment.commentId}
              commentId={comment.commentId}
              createdAt={comment.createdAt}
              parentId={comment?.parentId}
              content={comment.content}
              modifiedAt={comment?.modifiedAt}
              status={comment.status}
              author={comment.author}
              handleCommentDelete={handleCommentDelete}
              handleCommentEdit={handleCommentEdit}
              // eslint-disable-next-line react/no-children-prop
              children={comment?.children}
              handleCommentSubmit={handleCommentSubmit}
              gatherId={gatherId}
            />
          ))
        : undefined}
    </Container>
  );
};

export default GatherDetail;
