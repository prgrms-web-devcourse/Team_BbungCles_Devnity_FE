import { useRecoilValue } from "recoil";
import React from "react";
import { useFormik } from "formik";
import { HiOutlinePencilAlt } from "react-icons/hi";
import * as Yup from "yup";
import { BsCalendarDate, BsPeople } from "react-icons/bs";
import { Props } from "./types";
import Text from "../base/Text";
import ProfileBox from "../ProfileBox/ProfileBox";
import { Input } from "../base/Input";
import { globalMyProfile } from "../../atoms";
import {
  Container,
  Tag,
  InfoContainer,
  DetailContainer,
  AuthorButtonContainer,
  TagWrapper,
  ApplicantContainer,
  MarkdownEditorWrapper,
  BorderContainer,
  IconWrapper,
  FormContainer,
  CommentContainer,
  TextWrapper,
  EmptyTextWrapper,
  StyledButton,
  CommentButton,
  RowContainer,
  InfoDetailContainer,
  ApplyButtonContainer,
  CommentListContainer,
  InnerContainer,
  CommentBorderContainer,
  EditButton,
} from "./styles";
import theme from "../../assets/theme";
import {
  categoryDisplayName,
  common,
  gatherDisplayStatus,
  gatherStatus,
} from "../../constants";
import MarkdownEditor from "../base/MarkdownEditor";
import useToastUi from "../../hooks/useToastUi";
import ViewText from "../ViewText";
import Comment from "./Comment";
import useCreateGatherComment from "../../hooks/useCreateGatherComment";
import { HiddenLabel } from "../UserDetail/styles";
import Divider from "../base/Divider";

const GatherDetail = ({
  gatherData,
  handleGatherDelete,
  handleGatherClose,
  handleGatherApply,
  handleGatherCancel,
  handleVisibleModal,
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

  const { mutate: gatherDetailCommentMutate } = useCreateGatherComment();

  const { handleChange, handleSubmit, handleBlur, values } = useFormik<{
    content: string;
  }>({
    initialValues: { content: "" },
    validationSchema: Yup.object({
      content: Yup.string()
        .required()
        .max(50, "댓글은 50자이상 작성할 수 없습니다"),
    }),
    onSubmit: (formValues, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      gatherDetailCommentMutate({
        gatherId,
        parentId: null,
        content: formValues.content,
      });
      setSubmitting(false);
      resetForm();
    },
  });

  const myProfile = useRecoilValue(globalMyProfile);

  const isAuthor = myProfile?.user?.userId === author?.userId;

  return (
    <Container>
      <DetailContainer>
        <TagWrapper>
          {status !== gatherStatus.GATHERING ? (
            <Tag>
              <Text size={12} color={theme.colors.white}>
                {gatherDisplayStatus[status]}
              </Text>
            </Tag>
          ) : undefined}
          <Tag category={category}>
            <Text size={12}>{categoryDisplayName[category]}</Text>
          </Tag>
        </TagWrapper>
        <Text
          size={24}
          strong
          style={{ lineHeight: "1.42", letterSpacing: "-.3px" }}
        >
          {title}
        </Text>
        <InfoContainer>
          <ProfileBox
            src={author?.profileImgUrl}
            alt="프로필"
            name={author.name}
            course={author.course}
            generation={author.generation}
            fontSize={14}
          />
          <ViewText
            view={view || 0}
            iconColor={theme.colors.gray500}
            fontColor={theme.colors.gray600}
            fontSize={14}
          />
          <AuthorButtonContainer>
            {isAuthor &&
            (status === gatherStatus.GATHERING ||
              status === gatherStatus.FULL) ? (
              <EditButton type="button" onClick={handleVisibleModal}>
                수정
              </EditButton>
            ) : null}
            {isAuthor &&
            (status === gatherStatus.GATHERING ||
              status === gatherStatus.FULL) ? (
              <EditButton
                type="button"
                onClick={() => handleGatherClose(gatherId)}
              >
                마감
              </EditButton>
            ) : undefined}
            {isAuthor && status !== gatherStatus.DELETED ? (
              <EditButton
                type="button"
                onClick={() => handleGatherDelete(gatherId)}
              >
                삭제
              </EditButton>
            ) : undefined}
          </AuthorButtonContainer>
        </InfoContainer>
        <Divider color="#d8d8d8" />

        <BorderContainer>
          <InfoDetailContainer>
            <RowContainer>
              <TextWrapper>
                <BsCalendarDate size={18} />
                <Text size={18} strong>
                  모집 기간
                </Text>
              </TextWrapper>
              <Text color={theme.colors.fontColor}>
                {`${createdAt.substring(0, 10)} ~ ${deadline.substring(
                  0,
                  10
                )} 까지`}
              </Text>
            </RowContainer>

            <RowContainer>
              <TextWrapper>
                <BsPeople size={18} />
                <Text size={18} strong>
                  신청 인원
                </Text>
              </TextWrapper>
              <div>
                <div>
                  <Text color={theme.colors.scarlet}>{applicantCount}</Text>
                  <Text
                    color={theme.colors.fontColor}
                  >{` / ${applicantLimit}명`}</Text>
                </div>
                {participants?.map((applicant) => {
                  return (
                    <ApplicantContainer key={applicant.name}>
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
              </div>
            </RowContainer>
          </InfoDetailContainer>
          <ApplyButtonContainer>
            {!isAuthor && !isApplied && status === gatherStatus.GATHERING ? (
              <StyledButton
                type="button"
                onClick={() => handleGatherApply(gatherId)}
                isApplied={isApplied}
              >
                신청하기
              </StyledButton>
            ) : undefined}
            {!isAuthor && isApplied && status !== gatherStatus.DELETED ? (
              <StyledButton
                type="button"
                onClick={() => handleGatherCancel(gatherId)}
                isApplied={isApplied}
              >
                신청 취소
              </StyledButton>
            ) : undefined}
          </ApplyButtonContainer>
        </BorderContainer>

        <MarkdownEditorWrapper>
          <MarkdownEditor
            isViewMode
            editorRef={editorRef}
            value={content || ""}
          />
        </MarkdownEditorWrapper>
      </DetailContainer>

      <CommentListContainer>
        <InnerContainer>
          <CommentBorderContainer>
            <IconWrapper>
              <Text size={20} strong>
                {`댓글 ${commentCount}`}
              </Text>
            </IconWrapper>

            <FormContainer onSubmit={handleSubmit}>
              <HiddenLabel htmlFor="content">내용</HiddenLabel>

              <Input
                type="text"
                name="content"
                placeholder={common.message.ENTER_COMMENT}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.content}
                maxLength={common.validation.COMMENT_MAX_LENGTH}
              />

              {/* TODO: 데둥이 소개 상세페이지에 있는 댓글 버튼을 재사용 할 수 있게 리팩토링 */}
              <CommentButton type="submit">
                <Text size={12} color="white" strong ellipsisLineClamp={1}>
                  <HiOutlinePencilAlt size={20} />
                </Text>
              </CommentButton>
            </FormContainer>

            {commentCount === 0 && (
              <CommentContainer>
                <EmptyTextWrapper>{`${author.name}님에게 제일 먼저 댓글을 달아주세요!`}</EmptyTextWrapper>
              </CommentContainer>
            )}

            <CommentContainer>
              {comments?.map((comment) => (
                <React.Fragment key={comment.commentId}>
                  <Comment
                    comment={comment}
                    gatherId={gatherId}
                    isChild={false}
                  />
                  {comment.children?.map((child) => (
                    <Comment
                      key={`child${child.commentId}`}
                      comment={child}
                      gatherId={gatherId}
                      isChild
                    />
                  ))}
                </React.Fragment>
              ))}
            </CommentContainer>
          </CommentBorderContainer>
        </InnerContainer>
      </CommentListContainer>
    </Container>
  );
};

export default GatherDetail;
