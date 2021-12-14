import theme from "../../assets/theme";
import Button from "../base/Button";
import Input from "../base/Input";
import {
  Container,
  ItemContainer,
  CategoryWrapper,
  ClickedStyle,
  NormalStyle,
  ButtonWrapper,
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
  onContent: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onModalClose: () => void;
  onSubmit: () => void;
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
}: Props) => {
  return (
    <Container>
      <ItemContainer>
        <label htmlFor="category">카테고리</label>
        <CategoryWrapper>
          <Button
            onClick={() => onCategoryChange("study")}
            style={values.category === "study" ? ClickedStyle : NormalStyle}
          >
            스터디
          </Button>
          <Button
            onClick={() => onCategoryChange("project")}
            style={values.category === "project" ? ClickedStyle : NormalStyle}
          >
            프로젝트
          </Button>
          <Button
            onClick={() => onCategoryChange("club")}
            style={values.category === "club" ? ClickedStyle : NormalStyle}
          >
            동아리
          </Button>
        </CategoryWrapper>
      </ItemContainer>
      <ItemContainer>
        <label htmlFor="title">제목</label>
        <Input
          type="text"
          name="title"
          onChange={onTitleChange}
          value={values.title}
        />
      </ItemContainer>
      <ItemContainer>
        <label htmlFor="applicantCount">모집 인원</label>
        <Input
          type="text"
          name="applicantCount"
          onChange={onApplicantChange}
          value={values.applicantCount}
        />
      </ItemContainer>
      <ItemContainer>
        <label htmlFor="deadLine">마감 날짜</label>
        <Input
          type="text"
          name="deadline"
          onChange={onDeadline}
          value={values.deadline}
        />
      </ItemContainer>
      <ItemContainer>
        <label htmlFor="content">내용</label>
        <Input
          type="text"
          name="content"
          onChange={onContent}
          value={values.content}
        />
      </ItemContainer>
      <ButtonWrapper>
        <Button
          onClick={onModalClose}
          style={{
            color: theme.colors.fontColor,
            width: 100,
            border: `1px solid ${theme.colors.gray400}`,
            padding: 10,
            borderRadius: "6px",
            fontWeight: 600,
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
          }}
        >
          등록
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default GatherRegisterForm;
