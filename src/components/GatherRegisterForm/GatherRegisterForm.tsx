import Button from "../base/Button";

interface Props {
  category: string;
  title: string;
  onCategory: (category: string) => void;
  onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onModalClose: () => void;
}

const GatherRegisterForm = ({
  category,
  title,
  onCategory,
  onTitleChange,
  onModalClose,
}: Props) => {
  return (
    <>
      <label htmlFor="category">카테고리</label>
      <button
        type="button"
        onClick={() => onCategory("study")}
        style={{
          backgroundColor: category === "study" ? "yellow" : "red",
        }}
      >
        스터디
      </button>
      <button
        type="button"
        onClick={() => onCategory("project")}
        style={{
          backgroundColor: category === "project" ? "yellow" : "red",
        }}
      >
        프로젝트
      </button>
      <button
        type="button"
        onClick={() => onCategory("club")}
        style={{
          backgroundColor: category === "club" ? "yellow" : "red",
        }}
      >
        동아리
      </button>
      <label htmlFor="title">제목</label>
      <input type="text" name="title" onChange={onTitleChange} value={title} />

      {/* <label htmlFor="applicantCount">모집 인원</label>
          <Input type="text" name="applicantCount" onChange={handleChange} />
          <label htmlFor="deadLine">마감 날짜</label>
          <Input type="text" name="deadLine" onChange={handleChange} />
          <label htmlFor="content">내용</label>
          <Input type="text" name="content" onChange={handleChange} /> */}
      <Button onClick={onModalClose}>등록</Button>
    </>
  );
};

export default GatherRegisterForm;
