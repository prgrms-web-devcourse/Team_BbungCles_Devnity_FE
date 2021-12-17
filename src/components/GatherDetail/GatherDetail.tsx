import { useRecoilValue } from "recoil";
import { Props } from "./types";
import Text from "../base/Text";
import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment";
import ProfileBox from "../ProfileBox/ProfileBox";
import { globalMyProfile } from "../../atoms";
import {
  Container,
  Category,
  UserContainer,
  DetailContainer,
  TextContainer,
  ButtonContainer,
  CategoryWrapper,
} from "./styles";
import theme from "../../assets/theme";
import {
  categoryDisplayName,
  gatherDisplayStatus,
  gatherStatus,
} from "../../constants";

const GatherDetail = ({
  gatherData,
  handleGatherDelete,
  handleGatherClose,
  handleGatherApply,
  handleGatherCancel,
  handleCommentSubmit,
  handleCommentDelete,
  handleCommentEdit,
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

  const myProfile = useRecoilValue(globalMyProfile);

  return (
    <Container>
      <CategoryWrapper>
        <Category>
          <Text size={12} color={theme.colors.white}>
            {categoryDisplayName[category]}
          </Text>
        </Category>
        {status !== gatherStatus.GATHERING ? (
          <Category>
            <Text size={12} color={theme.colors.white}>
              {gatherDisplayStatus[status]}
            </Text>
          </Category>
        ) : undefined}
      </CategoryWrapper>
      <Text size={24} strong>
        {title}
      </Text>
      <UserContainer>
        <ProfileBox
          src={author?.profileImgUrl}
          alt="프로필"
          name={author.name}
          course={author.course}
          generation={author.generation}
        />
        <Text>{createdAt}</Text>
        <Text>{view}</Text>
      </UserContainer>
      <DetailContainer>
        <TextContainer>
          <Text size={18}>모집 기간</Text>
          <Text>{`${createdAt}~${deadline}`}</Text>
        </TextContainer>
        <TextContainer>
          <Text size={18}>모집 인원</Text>
          <Text>{`${applicantLimit}명`}</Text>
        </TextContainer>
        <TextContainer>
          <Text size={18}>신청 인원</Text>
          <Text>{`${applicantCount}명`}</Text>
          {participants?.map((applicant) => {
            return (
              <ProfileBox
                key={applicant.name}
                src={applicant.profileImgUrl}
                alt="프로필"
                name={applicant.name}
                course={applicant.course}
                generation={applicant.generation}
              />
            );
          })}
        </TextContainer>
        <TextContainer>
          <Text size={18}>상세 내용</Text>
          <Text>{content}</Text>
        </TextContainer>
        <ButtonContainer>
          {myProfile?.user?.userId !== author.userId && isApplied ? (
            <button type="button" onClick={() => handleGatherCancel(gatherId)}>
              취소
            </button>
          ) : (
            <button type="button" onClick={() => handleGatherApply(gatherId)}>
              신청
            </button>
          )}
          {myProfile?.user?.userId === author.userId ? (
            <>
              <button type="button" onClick={() => handleGatherClose(gatherId)}>
                모집 마감
              </button>
              <button
                type="button"
                onClick={() => handleGatherDelete(gatherId)}
              >
                모집 삭제
              </button>
            </>
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
