import ProfileBox from "../ProfileBox/ProfileBox";
import Text from "../base/Text/Text";
import { Container, AuthorContainer, DateStyle } from "./styles";

interface Props {
  commentId: number;
  createdAt: string;
  commentText: string;
  authorUsername: string;
  authorProfile: string;
  authorCourse: string;
  authorGeneration: number;
  isAuthor: boolean;
  children?: Array<any>;
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
          <Text style={DateStyle}>{createdAt}</Text>
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
        <Text style={DateStyle}>{createdAt}</Text>
      )}
    </AuthorContainer>
    <Text>{commentText}</Text>
  </Container>
);

export default Comment;
