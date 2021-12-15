import { MdEmail, MdModeComment } from "react-icons/md";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import { AiFillCaretRight } from "react-icons/ai";
import { MapMarker } from "react-kakao-maps-sdk";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import theme from "../../assets/theme";
import { common } from "../../constants";
import Input from "../base/Input";
import Text from "../base/Text";
import LikeButtonAndText from "../LikeButtonAndText/LikeButtonAndText";
import {
  BlankLink,
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
} from "./styles";
import MarkdownEditor from "../base/MarkdownEditor";
import Comment from "./Comment";
import { UserDetailProps } from "./types";
import useMutationUserDetailComment from "../../hooks/useMutationUserDetailComment";

const UserDetail = ({ userInfo, isLoading }: UserDetailProps) => {
  const { mutate } = useMutationUserDetailComment();
  const { handleChange, handleSubmit, handleBlur, values } = useFormik<{
    content: string;
  }>({
    initialValues: { content: "" },
    validationSchema: Yup.string().required(""),
    onSubmit: (formValues, { setSubmitting }) => {
      setSubmitting(true);
      mutate({
        introductionId: userInfo.introduction.introductionId,
        parentId: null,
        content: formValues.content,
      });
      setSubmitting(false);
    },
  });

  // TODO: 로딩처리
  if (isLoading) {
    return null;
  }

  return (
    <Container>
      <ProfileImage src={common.placeHolderImageSrc} alt="profile" />

      <LikeButtonAndText
        isLiked={false}
        likeCount={0}
        textSize={24}
        // TODO: API 완성되면 붙이기
        // eslint-disable-next-line
        onClick={() => console.log("좋아요")}
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
        <MbtiTag fontSize={16} mbti="ISFJ">
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

      <BorderContainer>
        <ContactContainer>
          <MdEmail size={24} />

          <Text size={16}>{userInfo.user.email}</Text>

          <BlankLink href={`mailto:${userInfo.user.email}`} target="_blank">
            <AiFillCaretRight size={24} />
          </BlankLink>
        </ContactContainer>

        {userInfo.introduction.githubUrl && (
          <ContactContainer>
            <BsGithub size={24} />

            <Text size={16}>{userInfo.introduction.githubUrl}</Text>

            <BlankLink href="https://github.com/rkdvnfma90" target="_blank">
              <AiFillCaretRight size={24} />
            </BlankLink>
          </ContactContainer>
        )}

        {userInfo.introduction.blogUrl && (
          <ContactContainer>
            <GiNotebook size={24} />

            <Text size={16}>{userInfo.introduction.blogUrl}</Text>

            <BlankLink href={userInfo.introduction.blogUrl} target="_blank">
              <AiFillCaretRight size={24} />
            </BlankLink>
          </ContactContainer>
        )}
      </BorderContainer>

      {userInfo.introduction.description && (
        <BorderContainer>
          <MarkdownEditor
            isViewMode
            value={userInfo.introduction.description}
          />
        </BorderContainer>
      )}

      <BorderContainer height={560}>
        <StyledMap
          center={{
            lat: userInfo.introduction.latitude || common.defaultPosition.lat,
            lng: userInfo.introduction.longitude || common.defaultPosition.lng,
          }}
        >
          <MapMarker
            position={{
              lat: userInfo.introduction.latitude || common.defaultPosition.lat,
              lng:
                userInfo.introduction.longitude || common.defaultPosition.lng,
            }}
          />
        </StyledMap>
      </BorderContainer>

      <BorderContainer height={560}>
        <MdModeComment size={24} />

        {userInfo.comments?.length === 0 && (
          <CommentContainer>{`${userInfo.user.name}님에게 제일 먼저 댓글을 달아주세요!`}</CommentContainer>
        )}

        <CommentContainer>
          {userInfo.comments?.map((comment) => (
            <React.Fragment key={comment.commentId}>
              <Comment comment={comment} isChild={false} />
              {comment.children?.map((child) => (
                <Comment
                  key={`child${child.commentId}`}
                  comment={child}
                  isChild
                />
              ))}
            </React.Fragment>
          ))}
        </CommentContainer>

        <FormContainer onSubmit={handleSubmit}>
          <Input
            type="text"
            name="content"
            placeholder={common.message.ENTER_COMMENT}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
          />

          <Button type="submit">
            <Text size={12} color="white" strong ellipsisLineClamp={1}>
              <HiOutlinePencilAlt size={20} />
            </Text>
          </Button>
        </FormContainer>
      </BorderContainer>
    </Container>
  );
};

export default UserDetail;
