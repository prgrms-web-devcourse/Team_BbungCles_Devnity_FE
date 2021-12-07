import ProfileBox from "../ProfileBox/ProfileBox";
import Text from "../Text/Text";
import { Container, AuthorWrapper, DateStyle } from "./styles";

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
  onDelete: (arg: number) => void;
  onEdit: (arg: number) => void;
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
  onDelete,
  onEdit,
}: Props) => (
  <Container>
    <AuthorWrapper>
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
              onDelete(commentId);
            }}
          >
            수정
          </button>
          <button
            type="button"
            onClick={() => {
              onEdit(commentId);
            }}
          >
            삭제
          </button>
        </div>
      ) : (
        <Text style={DateStyle}>{createdAt}</Text>
      )}
    </AuthorWrapper>
    <Text>{commentText}</Text>
  </Container>
);

export default Comment;
