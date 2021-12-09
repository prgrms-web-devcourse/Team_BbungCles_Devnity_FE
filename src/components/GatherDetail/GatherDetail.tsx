import { Props } from "./types";
import Text from "../base/Text";
import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment";
import ProfileBox from "../ProfileBox/ProfileBox";
import {
  Container,
  Category,
  UserContainer,
  DetailContainer,
  TextContainer,
  ButtonContainer,
} from "./styles";
import theme from "../../assets/theme";

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
    category,
    title,
    hostName,
    hostCourse,
    hostProfile,
    hostGeneration,
    createdDate,
    deadLine,
    view,
    applicantLimit,
    applicantCount,
    applicants,
    content,
  } = gatherData;

  // TODO: 로그인한 사용자인지 확인하는 로직 작성 필요
  const isAuthor = true;
  const userId = "1e5teg";

  return (
    <Container>
      <Category>
        <Text size={12} color={theme.colors.white}>
          {category}
        </Text>
      </Category>
      <Text size={24} strong>
        {title}
      </Text>
      <UserContainer>
        <ProfileBox
          src={hostProfile}
          alt="프로필"
          name={hostName}
          course={hostCourse}
          generation={hostGeneration}
        />
        <Text>{createdDate}</Text>
        <Text>{view}</Text>
      </UserContainer>
      <DetailContainer>
        <TextContainer>
          <Text size={18}>모집 기간</Text>
          <Text>{`${createdDate}~${deadLine}`}</Text>
        </TextContainer>
        <TextContainer>
          <Text size={18}>모집 인원</Text>
          <Text>{`${applicantLimit}명`}</Text>
        </TextContainer>
        <TextContainer>
          <Text size={18}>신청 인원</Text>
          <Text>{`${applicantCount}명`}</Text>
          {applicants?.map((applicant) => {
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
          <button
            type="button"
            onClick={() => handleGatherApply(gatherId, userId)}
          >
            신청
          </button>
          <button
            type="button"
            onClick={() => handleGatherCancel(gatherId, userId)}
          >
            취소
          </button>
          {isAuthor ? (
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
      <CommentForm onSubmit={handleCommentSubmit} />
      <Comment
        commentId={1}
        createdAt="2021-12-04"
        commentText="우왕 재밌겠네요"
        authorUsername="홍길동"
        authorProfile="https://picsum.photos/200/400"
        authorCourse="BE"
        authorGeneration={1}
        isAuthor={isAuthor}
        handleCommentDelete={handleCommentDelete}
        handleCommentEdit={handleCommentEdit}
      />
    </Container>
  );
};

export default GatherDetail;
