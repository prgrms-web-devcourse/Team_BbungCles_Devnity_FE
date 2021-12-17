import { FaComments } from "react-icons/fa";
import { BsFillKeyboardFill } from "react-icons/bs";
import { MdDeleteSweep, MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { useRecoilValue } from "recoil";
import { useCallback } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Container,
  ButtonContainer,
  CommentContainer,
  ContentContainer,
  IconButton,
  ImageWrapper,
  ProfileContainer,
  TextContainer,
  InputWrapperForm,
} from "./styles";
import { Comment } from "../types";
import Image from "../../base/Image";
import Text from "../../base/Text";
import { common } from "../../../constants";
import theme from "../../../assets/theme";
import { globalMyProfile } from "../../../atoms";
import useToggle from "../../../hooks/useToggle";
import useMutationUserDeleteComment from "../../../hooks/useMutationUserDeleteComment";
import Input from "../../base/Input";
import useMutationUserDetailComment from "../../../hooks/useMutationUserDetailComment";
import useMutationUserModifyComment from "../../../hooks/useMutationUserModifyComment";

interface IProps {
  comment: Comment;
  isChild: boolean;
  introductionId: number;
}

const Comment = ({ comment, isChild, introductionId }: IProps) => {
  const myProfile = useRecoilValue(globalMyProfile);
  const [isModifyClick, toggleModify] = useToggle(false);
  const [isChildCommentClick, toggleChildComment] = useToggle(false);

  const { mutate: userDeleteCommentMutate } = useMutationUserDeleteComment();
  const { mutate: userWriteChildCommentMutate } =
    useMutationUserDetailComment();
  const { mutate: userModifyCommentMutate } = useMutationUserModifyComment();

  const modifyCommentformik = useFormik({
    initialValues: { modifyComment: comment.content },
    validationSchema: Yup.object({
      modifyComment: Yup.string()
        .required()
        .max(
          common.validation.COMMENT_MAX_LENGTH,
          `댓글은 ${common.validation.COMMENT_MAX_LENGTH}자이상 작성할 수 없습니다`
        ),
    }),
    onSubmit: (formValues, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      userModifyCommentMutate({
        introductionId,
        commentId: comment.commentId,
        content: formValues.modifyComment,
      });
      setSubmitting(false);
      toggleModify();
      resetForm();
    },
  });

  const childCommentformik = useFormik({
    initialValues: { childComment: "" },
    validationSchema: Yup.object({
      childComment: Yup.string()
        .required()
        .max(
          common.validation.COMMENT_MAX_LENGTH,
          `댓글은 ${common.validation.COMMENT_MAX_LENGTH}자이상 작성할 수 없습니다`
        ),
    }),
    onSubmit: (formValues, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      userWriteChildCommentMutate({
        introductionId,
        parentId: comment.commentId,
        content: formValues.childComment,
      });
      setSubmitting(false);
      toggleChildComment();
      resetForm();
    },
  });

  const handleChildCommentClick = useCallback(() => {
    if (comment.status !== common.commentStatus.DELETED) {
      toggleChildComment();
    }
  }, [toggleChildComment, comment]);

  const handleModifyClick = useCallback(() => {
    if (comment.status !== common.commentStatus.DELETED) {
      toggleModify();
    }
  }, [toggleModify, comment]);

  const handleDeleteClick = useCallback(
    (commentId) => () => {
      if (comment.status !== common.commentStatus.DELETED) {
        // TODO: confirm꼭 없애기
        // eslint-disable-next-line
        if (confirm(common.message.CONFIRM_DELETE)) {
          userDeleteCommentMutate({ commentId, introductionId });
        }
      }
    },
    [userDeleteCommentMutate, introductionId, comment]
  );

  return (
    <Container>
      <CommentContainer>
        <ProfileContainer>
          {isChild && <MdOutlineSubdirectoryArrowRight size={28} />}

          <ImageWrapper>
            <Image
              src={comment.writer.profileImgUrl || common.placeHolderImageSrc}
              width={36}
              height={36}
              alt="프로필"
              mode="cover"
            />
          </ImageWrapper>

          <TextContainer />
        </ProfileContainer>

        <ContentContainer>
          <TextContainer>
            <Text size={20} strong>
              {comment.writer.name}
            </Text>
            <Text size={16} color={theme.colors.gray500}>
              {`${common.courseMap[comment.writer.course]} / ${
                comment.writer.generation
              }기`}
            </Text>
          </TextContainer>

          {isModifyClick ? (
            <InputWrapperForm onSubmit={modifyCommentformik.handleSubmit}>
              <Input
                type="text"
                name="modifyComment"
                placeholder="댓글을 입력해 주세요"
                onChange={modifyCommentformik.handleChange}
                value={modifyCommentformik.values.modifyComment}
                maxLength={common.validation.COMMENT_MAX_LENGTH}
              />
            </InputWrapperForm>
          ) : (
            comment.content
          )}
        </ContentContainer>

        <ButtonContainer>
          {comment.status !== common.commentStatus.DELETED && (
            <>
              {!isChild && (
                <IconButton role="button" onClick={handleChildCommentClick}>
                  <FaComments size={24} />
                </IconButton>
              )}

              {myProfile.user.userId === comment.writer.userId && (
                <>
                  <IconButton role="button" onClick={handleModifyClick}>
                    <BsFillKeyboardFill size={24} />
                  </IconButton>
                  <IconButton
                    role="button"
                    onClick={handleDeleteClick(comment.commentId)}
                  >
                    <MdDeleteSweep size={24} />
                  </IconButton>{" "}
                </>
              )}
            </>
          )}
        </ButtonContainer>
      </CommentContainer>

      {isChildCommentClick && (
        <InputWrapperForm onSubmit={childCommentformik.handleSubmit}>
          <Input
            type="text"
            name="childComment"
            placeholder="대댓글을 입력해 주세요"
            onChange={childCommentformik.handleChange}
            value={childCommentformik.values.childComment}
            maxLength={common.validation.COMMENT_MAX_LENGTH}
          />
        </InputWrapperForm>
      )}
    </Container>
  );
};

export default Comment;
