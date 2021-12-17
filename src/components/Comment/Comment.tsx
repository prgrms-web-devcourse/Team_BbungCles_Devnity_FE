/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO: 변수와 함수 사용하는 로직을 추가해야한다. (수정됨 표시, 댓글 수정기능)
import { useRecoilValue } from "recoil";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { useState } from "react";
import ProfileBox from "../ProfileBox/ProfileBox";
import Text from "../base/Text";
import {
  Container,
  DiscernContainer,
  AuthorContainer,
  DateText,
  CommetFormWrapper,
} from "./styles";
import { Comment } from "../../types/comment";
import { globalMyProfile } from "../../atoms";
import CommentForm, { SubmitProps } from "../CommentForm/CommentForm";
import { DeleteCommentProps, EditommentProps } from "../GatherDetail/types";

interface Props extends Comment {
  gatherId: number;
  handleCommentDelete: (arg: DeleteCommentProps) => void;
  handleCommentEdit: (arg: EditommentProps) => void;
  handleCommentSubmit: (arg: SubmitProps) => void;
}

const Comment = ({
  commentId,
  parentId,
  content,
  createdAt,
  modifiedAt,
  status,
  author,
  children,
  gatherId,
  handleCommentDelete,
  handleCommentEdit,
  handleCommentSubmit,
}: Props) => {
  const [formVisible, setFormVisible] = useState(false);
  const myProfile = useRecoilValue(globalMyProfile);

  return (
    <Container>
      <DiscernContainer>
        <AuthorContainer>
          <ProfileBox
            src={author?.profileImgUrl}
            name={author.name}
            course={author.course}
            generation={author.generation}
          />
          {myProfile.user.userId === author.userId ? (
            <div>
              <DateText>{createdAt}</DateText>

              {/* TODO: 수정 부분 레이아웃 완성 시 붙일 예정이다.
                <button
                type="button"
                onClick={() => {
                  handleCommentEdit({gatherId:gatherId, content: commentId: children[0].commentId});
                }}
              >
                수정
              </button> */}
              <button
                type="button"
                onClick={() => {
                  handleCommentDelete({
                    gatherId,
                    commentId,
                  });
                }}
              >
                삭제
              </button>
            </div>
          ) : (
            <>
              <DateText>{createdAt}</DateText>
              {parentId ? undefined : (
                <button
                  type="button"
                  onClick={() => setFormVisible(!formVisible)}
                >
                  답글 달기
                </button>
              )}
            </>
          )}
        </AuthorContainer>
        <Text>{content}</Text>
      </DiscernContainer>
      {parentId ? <MdOutlineSubdirectoryArrowRight size={28} /> : undefined}
      {children[0] ? (
        <DiscernContainer>
          <AuthorContainer>
            <ProfileBox
              src={children[0].author?.profileImgUrl}
              name={children[0].author.name}
              course={children[0].author.course}
              generation={children[0].author.generation}
            />
            {myProfile.user.userId === children[0].author.userId ? (
              <div>
                <DateText>{children[0].createdAt}</DateText>
                {/* <button
                  type="button"
                  onClick={() => {
                    handleCommentEdit(children[0].commentId);
                  }}
                >
                  수정
                </button> */}
                <button
                  type="button"
                  onClick={() => {
                    handleCommentDelete({
                      gatherId,
                      commentId: children[0].commentId,
                    });
                  }}
                >
                  삭제
                </button>
              </div>
            ) : (
              <DateText>{children[0].createdAt}</DateText>
            )}
          </AuthorContainer>
          <Text>{content}</Text>
        </DiscernContainer>
      ) : undefined}
      <CommetFormWrapper visible={formVisible}>
        <CommentForm
          onSubmit={handleCommentSubmit}
          gatherId={gatherId}
          parentId={commentId}
        />
      </CommetFormWrapper>
    </Container>
  );
};

export default Comment;
