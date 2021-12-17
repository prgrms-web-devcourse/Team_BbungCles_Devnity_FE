import theme from "../../assets/theme";
import { categoryValue } from "../../constants";
import Button from "../base/Button";
import Input from "../base/Input";
import {
  Container,
  ItemContainer,
  CategoryWrapper,
  LabelContainer,
  ClickedStyle,
  NormalStyle,
  ButtonContainer,
  Textarea,
  ErrorMessage,
} from "./styles";

interface Props {
  values: {
    category: string;
    title: string;
    applicantCount: string;
    deadline: string;
    content: string;
  };
  onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onApplicantChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCategoryChange: (selectedCategory: string) => void;
  onDeadline: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onContent: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; // (e: React.ChangeEvent<HTMLInputElement>) => void;
  onModalClose: () => void;
  onSubmit: () => void;
  error: Array<string>;
}

const GatherRegisterForm = ({
  values,
  onCategoryChange,
  onTitleChange,
  onApplicantChange,
  onDeadline,
  onContent,
  onModalClose,
  onSubmit,
  error,
}: Props) => {
  return (
    <Container>
      <ItemContainer>
        <LabelContainer>
          <label htmlFor="category">카테고리</label>
          {error.includes("category") ? (
            <ErrorMessage>필수 입력 값입니다.</ErrorMessage>
          ) : undefined}
        </LabelContainer>
        <CategoryWrapper>
          <Button
            onClick={() => onCategoryChange(categoryValue.STUDY)}
            style={
              values.category === categoryValue.STUDY
                ? ClickedStyle
                : NormalStyle
            }
          >
            스터디
          </Button>
          <Button
            onClick={() => onCategoryChange(categoryValue.PROJECT)}
            style={
              values.category === categoryValue.PROJECT
                ? ClickedStyle
                : NormalStyle
            }
          >
            프로젝트
          </Button>
          <Button
            onClick={() => onCategoryChange(categoryValue.CLUB)}
            style={
              values.category === categoryValue.CLUB
                ? ClickedStyle
                : NormalStyle
            }
          >
            동아리
          </Button>
        </CategoryWrapper>
      </ItemContainer>
      <ItemContainer>
        <LabelContainer>
          <label htmlFor="title">제목</label>
          {error.includes("title") ? (
            <ErrorMessage>필수 입력 값입니다.</ErrorMessage>
          ) : undefined}
        </LabelContainer>
        <Input
          type="text"
          name="title"
          onChange={onTitleChange}
          value={values.title}
        />
      </ItemContainer>
      <ItemContainer>
        <LabelContainer>
          <label htmlFor="applicantCount">모집 인원</label>
          {error.includes("applicantLimit") ? (
            <ErrorMessage>필수 입력 값입니다.</ErrorMessage>
          ) : undefined}
        </LabelContainer>
        <Input
          type="text"
          name="applicantCount"
          onChange={onApplicantChange}
          value={values.applicantCount}
        />
      </ItemContainer>
      <ItemContainer>
        <LabelContainer>
          <label htmlFor="deadline">마감 날짜</label>
          {error.includes("deadline") ? (
            <ErrorMessage>필수 입력 값입니다.</ErrorMessage>
          ) : undefined}
        </LabelContainer>
        <Input
          type="text"
          name="deadline"
          onChange={onDeadline}
          value={values.deadline}
        />
      </ItemContainer>
      <ItemContainer>
        <LabelContainer>
          <label htmlFor="content">내용</label>
          {error.includes("content") ? (
            <ErrorMessage>필수 입력 값입니다.</ErrorMessage>
          ) : undefined}
        </LabelContainer>
        <Textarea
          id="content"
          name="content"
          value={values.content}
          onChange={onContent}
        />
      </ItemContainer>
      <ButtonContainer>
        <Button
          onClick={onModalClose}
          style={{
            color: theme.colors.fontColor,
            width: 100,
            border: `1px solid ${theme.colors.gray400}`,
            padding: 10,
            borderRadius: "6px",
            fontWeight: 600,
            justifyContent: "center",
          }}
        >
          취소
        </Button>
        <Button
          onClick={onSubmit}
          style={{
            backgroundColor: theme.colors.orange400,
            width: 100,
            padding: 10,
            borderRadius: "6px",
            color: theme.colors.white,
            justifyContent: "center",
          }}
        >
          등록
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default GatherRegisterForm;
