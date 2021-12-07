import { Props } from "./types";
import Text from "../Text/Text";
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
    place,
    content,
  } = gatherData;

  // TODO: 로그인한 사용자인지 확인하는 로직 작성 필요
  const isAuthor = true;
  const userId = "1e5teg";

  return (
    <Container>
      <Category>
        <Text fontSize="12px" color="white">
          {category}
        </Text>
      </Category>
      <Text fontSize="24px" style={{ fontWeight: "bold" }}>
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
        <Text color="#8C8D96">{createdDate}</Text>
        <Text color="#8C8D96">{view}</Text>
      </UserContainer>
      <DetailContainer>
        <TextContainer>
          <Text fontSize="18px">모집 기간</Text>
          <Text>
            {createdDate}~{deadLine}
          </Text>
        </TextContainer>
        <TextContainer>
          <Text fontSize="18px">모집 인원</Text>
          <Text>{applicantLimit}명</Text>
        </TextContainer>
        <TextContainer>
          <Text fontSize="18px">신청 인원</Text>
          <Text>{applicantCount}명</Text>
          {applicants?.map((applicant) => {
            return (
              <ProfileBox
                key={applicant.name}
                src={applicant.profile}
                alt="프로필"
                name={applicant.name}
                course={applicant.course}
                generation={applicant.generation}
              />
            );
          })}
        </TextContainer>
        <TextContainer>
          <Text fontSize="18px">장소</Text>
          <Text>{place}</Text>
        </TextContainer>
        <TextContainer>
          <Text fontSize="18px">상세 내용</Text>
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
        onDelete={handleCommentDelete}
        onEdit={handleCommentEdit}
      />
    </Container>
  );
};

export default GatherDetail;
