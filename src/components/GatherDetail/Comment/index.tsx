import { MdDeleteSweep, MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { useRecoilValue } from "recoil";
import { useCallback, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
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
import { Comment } from "../../../types/comment";
import Image from "../../base/Image";
import Text from "../../base/Text";
import { common } from "../../../constants";
import theme from "../../../assets/theme";
import { globalMyProfile } from "../../../atoms";
import useToggle from "../../../hooks/useToggle";
import Input from "../../base/Input";
import useDeleteComment from "../../../hooks/useDeleteComment";
import useCreateGatherComment from "../../../hooks/useCreateGatherComment";
import useEditComment from "../../../hooks/useEditComment";
import "dayjs/locale/ko";

interface IProps {
  comment: Comment;
  isChild: boolean;
  gatherId: number;
}

const Comment = ({ comment, isChild, gatherId }: IProps) => {
  const [fromNow, setFromNow] = useState<string | null>(null);

  const myProfile = useRecoilValue(globalMyProfile);

  const [isModifyClick, toggleModify] = useToggle(false);
  const [isChildCommentClick, toggleChildComment] = useToggle(false);

  const { mutate: gatherDeleteCommentMutate } = useDeleteComment();
  const { mutate: gatherWriteChildCommentMutate } = useCreateGatherComment();
  const { mutate: gatherModifyCommentMutate } = useEditComment();

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
      gatherModifyCommentMutate({
        gatherId,
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
      gatherWriteChildCommentMutate({
        gatherId,
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
          gatherDeleteCommentMutate({ commentId, gatherId });
        }
      }
    },
    [gatherDeleteCommentMutate, gatherId, comment]
  );

  useEffect(() => {
    dayjs.extend(relativeTime);
    dayjs.locale("ko");
    setFromNow(dayjs(comment.modifiedAt).fromNow());
  }, [comment]);

  return (
    <Container>
      <CommentContainer>
        <ProfileContainer>
          {isChild && <MdOutlineSubdirectoryArrowRight size={28} />}

          <ImageWrapper>
            <Image
              src={comment.author.profileImgUrl || common.placeHolderImageSrc}
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
            <Text size={16} strong>
              {comment.author.name}
            </Text>
            <Text size={14} color={theme.colors.gray500}>
              {`${common.courseMap[comment.author.course]} / ${
                comment.author.generation
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
            <Text>{comment.content}</Text>
          )}

          <Text size={12} color={theme.colors.gray500}>
            {fromNow}
          </Text>
        </ContentContainer>

        <ButtonContainer>
          {comment.status !== common.commentStatus.DELETED && (
            <>
              {!isChild && (
                <IconButton role="button" onClick={handleChildCommentClick}>
                  <Text size={12} color={theme.colors.gray600}>
                    답글
                  </Text>
                </IconButton>
              )}

              {myProfile?.user?.userId === comment?.author?.userId && (
                <>
                  <IconButton role="button" onClick={handleModifyClick}>
                    <Text size={12} color={theme.colors.gray600}>
                      수정
                    </Text>
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
