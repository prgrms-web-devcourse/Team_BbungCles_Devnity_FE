import ProfileBox from "../ProfileBox/ProfileBox";
import Text from "../base/Text";
import { Container, AuthorContainer, DateText } from "./styles";

interface Comment {
  commentId: number;
  createdAt: string;
  commentText: string;
  authorUsername: string;
  authorProfile: string;
  authorCourse: string;
  authorGeneration: number;
  isAuthor: boolean;
}
interface Props {
  commentId: number;
  createdAt: string;
  commentText: string;
  authorUsername: string;
  authorProfile: string;
  authorCourse: string;
  authorGeneration: number;
  isAuthor: boolean;
  children?: Array<Comment>;
  handleCommentDelete: (arg: number) => void;
  handleCommentEdit: (arg: number) => void;
}

const Comment = ({
  commentId,
  createdAt,
  commentText,
  authorUsername,
  authorProfile,
  authorCourse,
  authorGeneration,
  isAuthor,
  // TODO : 대댓글 기능 구현해야 한다.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  children,
  handleCommentDelete,
  handleCommentEdit,
}: Props) => (
  <Container>
    <AuthorContainer>
      <ProfileBox
        src={authorProfile}
        name={authorUsername}
        course={authorCourse}
        generation={authorGeneration}
      />
      {isAuthor ? (
        <div>
          <DateText>{createdAt}</DateText>
          <button
            type="button"
            onClick={() => {
              handleCommentDelete(commentId);
            }}
          >
            수정
          </button>
          <button
            type="button"
            onClick={() => {
              handleCommentEdit(commentId);
            }}
          >
            삭제
          </button>
        </div>
      ) : (
        <DateText>{createdAt}</DateText>
      )}
    </AuthorContainer>
    <Text>{commentText}</Text>
  </Container>
);

export default Comment;
