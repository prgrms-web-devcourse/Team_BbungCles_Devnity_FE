import { MdEmail } from "react-icons/md";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import { MapMarker } from "react-kakao-maps-sdk";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useCallback } from "react";
import theme from "../../assets/theme";
import { common } from "../../constants";
import Input from "../base/Input";
import Text from "../base/Text";
import LikeButtonAndText from "../LikeButtonAndText/LikeButtonAndText";
import {
  BorderContainer,
  Button,
  CommentContainer,
  ContactContainer,
  Container,
  FormContainer,
  MbtiTag,
  ProfileImage,
  StyledMap,
  TextWrapper,
  UserTag,
  HiddenLabel,
  ContentContainer,
  DescriptionBorderContainer,
  EmptyTextWrapper,
  IconWrapper,
  CommentBorderContainer,
  EllipsisWrapper,
} from "./styles";
import MarkdownEditor from "../base/MarkdownEditor";
import Comment from "./Comment";
import { UserDetailProps } from "./types";
import useMutationUserDetailComment from "../../hooks/useMutationUserDetailComment";
import useMutationUserLike from "../../hooks/useMutationUserLike";
import useMutationUserDeleteLike from "../../hooks/useMutationUserDeleteLike";

const UserDetail = ({ userInfo, isLoading }: UserDetailProps) => {
  const { mutate: userDetailCommentMutate } = useMutationUserDetailComment();
  const { mutate: userLikeMutate } = useMutationUserLike();
  const { mutate: userDeleteLikeMutate } = useMutationUserDeleteLike();

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
      userDetailCommentMutate({
        introductionId: userInfo.introduction.introductionId,
        parentId: null,
        content: formValues.content,
      });
      setSubmitting(false);
      resetForm();
    },
  });

  const handleLikeClick = useCallback(() => {
    if (userInfo.liked) {
      userDeleteLikeMutate(userInfo.introduction.introductionId);
    } else {
      userLikeMutate(userInfo.introduction.introductionId);
    }
  }, [userDeleteLikeMutate, userLikeMutate, userInfo]);

  // TODO: 로딩처리
  if (isLoading || !userInfo) {
    return null;
  }

  return (
    <Container>
      <ProfileImage
        src={userInfo.introduction.profileImgUrl || common.placeHolderImageSrc}
        alt="profile"
      />

      <LikeButtonAndText
        isLiked={userInfo.liked}
        likeCount={userInfo.introduction.likeCount}
        textSize={24}
        onClick={handleLikeClick}
      />

      <Text size={32} color={theme.colors.gray800} strong>
        {userInfo.user.name}
      </Text>

      <UserTag course="FE" color="white" fontSize={16}>
        {common.courseMap[userInfo.user.course] || ""} /{" "}
        {`${userInfo.user.generation}기`} /{" "}
        {`${common.roleMap[userInfo.user.role] || ""}`}
      </UserTag>

      {userInfo.introduction.mbti && (
        <MbtiTag fontSize={16} mbti={userInfo.introduction.mbti}>
          {userInfo.introduction.mbti}
        </MbtiTag>
      )}

      <TextWrapper>
        <Text
          size={24}
          color={theme.colors.gray800}
          strong
          style={{ lineHeight: "1.5" }}
        >
          {userInfo.introduction.summary}
        </Text>
      </TextWrapper>

      <ContentContainer>
        <BorderContainer>
          <Text size={20} strong>
            연락처
          </Text>

          <ContactContainer
            href={`mailto:${userInfo.user.email}`}
            target="_blank"
          >
            <IconWrapper>
              <MdEmail size={24} />
            </IconWrapper>

            <EllipsisWrapper>
              <Text size={16} strong>
                {userInfo.user.email}
              </Text>
            </EllipsisWrapper>
          </ContactContainer>

          <ContactContainer
            href={userInfo.introduction.githubUrl}
            target="_blank"
          >
            <IconWrapper>
              <BsGithub size={24} />
            </IconWrapper>

            <EllipsisWrapper>
              <Text size={16} strong>
                {userInfo.introduction.githubUrl ||
                  "아직 깃허브 주소를 입력하지 않았어요"}
              </Text>
            </EllipsisWrapper>
          </ContactContainer>

          <ContactContainer
            href={userInfo.introduction.blogUrl}
            target="_blank"
          >
            <IconWrapper>
              <GiNotebook size={24} />
            </IconWrapper>

            <EllipsisWrapper>
              <Text size={16} strong>
                {userInfo.introduction.blogUrl ||
                  "아직 블로그 주소를 입력하지 않았어요"}
              </Text>
            </EllipsisWrapper>
          </ContactContainer>
        </BorderContainer>

        <DescriptionBorderContainer height={560}>
          <Text size={20} strong>
            자기소개
          </Text>

          {!userInfo.introduction.description && (
            <EmptyTextWrapper>
              <Text size={16} strong>
                아직 자기소개를 입력하지 않았어요
              </Text>
            </EmptyTextWrapper>
          )}

          <MarkdownEditor
            editorRef={null}
            isViewMode
            value={userInfo.introduction.description}
          />
        </DescriptionBorderContainer>

        <BorderContainer height={640}>
          <Text size={20} strong>
            내 위치
          </Text>

          <StyledMap
            center={{
              lat: userInfo.introduction.latitude || common.defaultPosition.lat,
              lng:
                userInfo.introduction.longitude || common.defaultPosition.lng,
            }}
          >
            <MapMarker
              position={{
                lat:
                  userInfo.introduction.latitude || common.defaultPosition.lat,
                lng:
                  userInfo.introduction.longitude || common.defaultPosition.lng,
              }}
            />
          </StyledMap>
        </BorderContainer>

        <CommentBorderContainer height={560}>
          <Text size={20} strong>
            {`댓글 ${userInfo?.introduction.commentCount}`}
          </Text>

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

          {userInfo.comments?.length === 0 && (
            <CommentContainer>
              <EmptyTextWrapper>{`${userInfo.user.name}님에게 제일 먼저 댓글을 달아주세요!`}</EmptyTextWrapper>
            </CommentContainer>
          )}

          <CommentContainer>
            {userInfo.comments?.map((comment) => (
              <React.Fragment key={comment.commentId}>
                <Comment
                  comment={comment}
                  introductionId={userInfo.introduction.introductionId}
                  isChild={false}
                />
                {comment.children?.map((child) => (
                  <Comment
                    key={`child${child.commentId}`}
                    comment={child}
                    introductionId={userInfo.introduction.introductionId}
                    isChild
                  />
                ))}
              </React.Fragment>
            ))}
          </CommentContainer>
        </CommentBorderContainer>
      </ContentContainer>
    </Container>
  );
};

export default UserDetail;
