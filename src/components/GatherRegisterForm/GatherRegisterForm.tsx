import { Editor } from "@toast-ui/react-editor";
import { categoryValue } from "../../constants";
import { Input } from "../base/Input";
import {
  Container,
  ItemContainer,
  CategoryWrapper,
  LabelContainer,
  ButtonContainer,
  ErrorMessage,
  MarkdownEditorWrapper,
  StyledDatePicker,
  CancelButton,
  RegisterButton,
  CategoryButton,
} from "./styles";
import MarkdownEditor from "../base/MarkdownEditor";

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
  onDeadline: (value: string) => void;
  onContent: (value: string) => void;
  onModalClose: () => void;
  onSubmit: () => void;
  error: Array<string>;
  editorRef: React.MutableRefObject<Editor>;
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
  editorRef,
}: Props) => {
  return (
    <Container>
      <ItemContainer>
        <LabelContainer>
          <label htmlFor="category">카테고리</label>
          {error.includes("category") ? (
            <ErrorMessage>필수 입력 값입니다.</ErrorMessage>
          ) : null}
        </LabelContainer>
        <CategoryWrapper>
          <CategoryButton
            isActive={values.category === categoryValue.STUDY}
            onClick={() => onCategoryChange(categoryValue.STUDY)}
          >
            스터디
          </CategoryButton>
          <CategoryButton
            isActive={values.category === categoryValue.PROJECT}
            onClick={() => onCategoryChange(categoryValue.PROJECT)}
          >
            프로젝트
          </CategoryButton>
          <CategoryButton
            isActive={values.category === categoryValue.CLUB}
            onClick={() => onCategoryChange(categoryValue.CLUB)}
          >
            동아리
          </CategoryButton>
        </CategoryWrapper>
      </ItemContainer>
      <ItemContainer>
        <LabelContainer>
          <label htmlFor="title">제목</label>
          {error.includes("title") ? (
            <ErrorMessage>필수 입력 값입니다.</ErrorMessage>
          ) : null}
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
          ) : null}
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
          ) : null}
        </LabelContainer>
        <StyledDatePicker
          name="deadline"
          dateFormat="yyyy-MM-dd"
          selected={values.deadline || null}
          minDate={new Date()}
          maxDate={new Date("9999-12-31")}
          onChange={(value: string) => onDeadline(value)}
          value={values.deadline}
        />
      </ItemContainer>
      <ItemContainer>
        <LabelContainer>
          <label htmlFor="content">내용</label>
          {error.includes("content") ? (
            <ErrorMessage>필수 입력 값입니다.</ErrorMessage>
          ) : null}
        </LabelContainer>
        <MarkdownEditorWrapper>
          <MarkdownEditor
            editorRef={editorRef}
            setEditorText={(value: string) => onContent(value)}
            value={values.content || ""}
          />
        </MarkdownEditorWrapper>
      </ItemContainer>
      <ButtonContainer>
        <CancelButton width="100px" onClick={onModalClose}>
          취소
        </CancelButton>
        <RegisterButton width="100px" onClick={onSubmit}>
          등록
        </RegisterButton>
      </ButtonContainer>
    </Container>
  );
};

export default GatherRegisterForm;
