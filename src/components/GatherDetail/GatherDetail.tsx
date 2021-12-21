import { useRecoilValue } from "recoil";
import React, { useState } from "react";
import { useFormik } from "formik";
import { HiOutlinePencilAlt } from "react-icons/hi";
import * as Yup from "yup";
import { Props } from "./types";
import Text from "../base/Text";
import ProfileBox from "../ProfileBox/ProfileBox";
import Input from "../base/Input";
import { globalMyProfile } from "../../atoms";
import {
  Container,
  TestContainer,
  Category,
  UserContainer,
  DetailContainer,
  TextContainer,
  ButtonContainer,
  CategoryWrapper,
  EditDeadlineContainer,
  Select,
  EditContainer,
  ApplicantContainer,
  MarkdownEditorWrapper,
  BorderContainer,
  IconWrapper,
  FormContainer,
  CommentContainer,
  TextWrapper,
  EmptyTextWrapper,
  Button,
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
import PeriodText from "../PeriodText";
import Comment from "./Comment";
import useCreateGatherComment from "../../hooks/useCreateGatherComment";
import { HiddenLabel } from "../UserDetail/styles";
import useToggle from "../../hooks/useToggle";

const GatherDetail = ({
  gatherData,
  handleGatherDelete,
  handleGatherClose,
  handleGatherApply,
  handleGatherCancel,
  handleGatherDetailEdit,
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

  const [editValue, setEditValue] = useState({
    title,
    content,
    category,
    deadline: deadline.substring(0, 10),
  });

  const [isModifyClick, toggleModify] = useToggle(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditValue({
      ...editValue,
      [name]: value,
    });
  };

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
      <TestContainer>
        <CategoryWrapper
          row={status !== gatherStatus.GATHERING && !isModifyClick}
        >
          {status !== gatherStatus.GATHERING ? (
            <Category>
              <Text size={12} color={theme.colors.white}>
                {gatherDisplayStatus[status]}
              </Text>
            </Category>
          ) : undefined}
          {isAuthor && isModifyClick ? (
            <EditContainer>
              <label
                htmlFor="category"
                style={{ fontSize: "18px", fontWeight: 700 }}
              >
                카테고리
              </label>
              <Select
                name="category"
                value={editValue.category}
                onChange={handleChange}
              >
                <option value={category}>
                  {categoryDisplayName[category]}
                </option>
                {Object.keys(categoryDisplayName).map((item) =>
                  item !== category ? (
                    <option key={item} value={item}>
                      {categoryDisplayName[item]}
                    </option>
                  ) : undefined
                )}
              </Select>
            </EditContainer>
          ) : (
            <Category style={{ backgroundColor: theme.colors[category] }}>
              <Text size={12}>{categoryDisplayName[category]}</Text>
            </Category>
          )}
        </CategoryWrapper>

        {isAuthor && isModifyClick ? (
          <EditContainer>
            <label
              htmlFor="title"
              style={{ fontSize: "18px", fontWeight: 700 }}
            >
              제목
            </label>
            <Input
              type="text"
              name="title"
              onChange={handleInputChange}
              value={editValue.title}
            />
          </EditContainer>
        ) : (
          <Text size={24} strong>
            {title}
          </Text>
        )}
        <UserContainer>
          <ProfileBox
            src={author?.profileImgUrl}
            alt="프로필"
            name={author.name}
            course={author.course}
            generation={author.generation}
            fontSize={16}
          />
          <PeriodText
            createdDate={createdAt.substring(0, 10)}
            iconColor={theme.colors.gray500}
            fontColor={theme.colors.gray600}
            fontSize={14}
          />
          <ViewText
            view={view || 0}
            iconColor={theme.colors.gray500}
            fontColor={theme.colors.gray600}
            fontSize={14}
          />
        </UserContainer>
        <DetailContainer>
          <TextContainer>
            <div>
              <span>📅 </span>
              <Text size={18} strong>
                모집 기간
              </Text>
            </div>
            {isAuthor && isModifyClick ? (
              <EditDeadlineContainer>
                <Text color={theme.colors.fontColor}>{`${createdAt.substring(
                  0,
                  10
                )} ~ `}</Text>
                <Input
                  type="text"
                  name="deadline"
                  onChange={handleInputChange}
                  value={editValue.deadline}
                  customStyle={{ width: "30%" }}
                />
              </EditDeadlineContainer>
            ) : (
              <TextWrapper>
                <Text color={theme.colors.fontColor}>
                  {`${createdAt.substring(0, 10)} ~ ${deadline.substring(
                    0,
                    10
                  )}`}
                </Text>
              </TextWrapper>
            )}
          </TextContainer>
          <TextContainer>
            <div>
              <span>👤 </span>
              <Text size={18} strong>
                모집 인원
              </Text>
            </div>
            <TextWrapper>
              <Text
                color={theme.colors.fontColor}
              >{`${applicantLimit}명`}</Text>
            </TextWrapper>
          </TextContainer>
          <TextContainer>
            <div>
              <span>👥 </span>
              <Text size={18} strong>
                신청 인원
              </Text>
            </div>
            <TextWrapper>
              <Text color={theme.colors.fontColor}>
                {`${applicantCount} / ${applicantLimit}명`}
              </Text>
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
            </TextWrapper>
          </TextContainer>
          <TextContainer>
            <div>
              <span>💡 </span>
              <Text size={18} strong>
                상세 내용
              </Text>
            </div>
            <TestContainer>
              <MarkdownEditorWrapper>
                <MarkdownEditor
                  isViewMode={!isModifyClick}
                  editorRef={editorRef}
                  setEditorText={(value: string) =>
                    setEditValue({ ...editValue, content: value })
                  }
                  value={isAuthor ? editValue.content || "" : content || ""}
                />
              </MarkdownEditorWrapper>
            </TestContainer>
          </TextContainer>
          <ButtonContainer>
            {!isAuthor && !isApplied && status === gatherStatus.GATHERING ? (
              <button type="button" onClick={() => handleGatherApply(gatherId)}>
                신청
              </button>
            ) : undefined}
            {!isAuthor && isApplied && status !== gatherStatus.DELETED ? (
              <button
                type="button"
                onClick={() => handleGatherCancel(gatherId)}
              >
                신청 취소
              </button>
            ) : undefined}
            {isAuthor &&
            (status === gatherStatus.GATHERING ||
              status === gatherStatus.FULL) ? (
              <button type="button" onClick={() => handleGatherClose(gatherId)}>
                마감
              </button>
            ) : undefined}
            {isAuthor && status !== gatherStatus.DELETED ? (
              <button
                type="button"
                onClick={() => handleGatherDelete(gatherId)}
              >
                삭제
              </button>
            ) : undefined}
            {isAuthor &&
            !isModifyClick &&
            (status === gatherStatus.GATHERING ||
              status === gatherStatus.FULL) ? (
              <button type="button" onClick={() => toggleModify()}>
                수정
              </button>
            ) : null}
            {isAuthor &&
            isModifyClick &&
            (status === gatherStatus.GATHERING ||
              status === gatherStatus.FULL) ? (
              <button
                type="button"
                onClick={() => {
                  toggleModify();
                  handleGatherDetailEdit({ ...editValue, gatherId });
                }}
              >
                수정완료
              </button>
            ) : null}
          </ButtonContainer>
        </DetailContainer>

        <BorderContainer>
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

            <Button type="submit">
              <Text size={12} color="white" strong ellipsisLineClamp={1}>
                <HiOutlinePencilAlt size={20} />
              </Text>
            </Button>
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
        </BorderContainer>
      </TestContainer>
    </Container>
  );
};

export default GatherDetail;
