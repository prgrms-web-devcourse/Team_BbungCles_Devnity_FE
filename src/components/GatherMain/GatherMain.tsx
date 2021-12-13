import React from "react";
import GatherList from "../GatherList/GatherList";
import Modal from "../base/Modal";
import Input from "../base/Input";
import {
  Container,
  SearchAndWriteContainer,
  SearchForm,
  HiddenLabel,
  AInput,
  SearchButton,
  WriteButton,
} from "./styles";
import Button from "../base/Button";

export interface GatherData {
  status: string;
  gatherId: number;
  category: string;
  title: string;
  createdDate: string;
  deadLine: string;
  applicantLimit: number;
  applicantCount: number;
  view: number;
  name: string;
  course: string;
  generation: number;
  profileImgUrl: string;
  content?: string;
}

type WriteProps = Pick<
  GatherData,
  "category" | "title" | "content" | "applicantCount" | "deadLine"
>;

interface Props {
  selectedCategory?: string;
  gatherData: Array<GatherData>;
  modalVisible: boolean;
  values: WriteProps;
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleWrite: () => void;
  handleModalClose: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCategory: (category: string) => void;
  test: string;
}

const Gather = ({
  selectedCategory,
  gatherData,
  modalVisible,
  values,
  handleSubmit,
  handleWrite,
  handleModalClose,
  handleChange,
  handleCategory,
  test,
}: Props) => {
  return (
    <Container>
      <SearchAndWriteContainer>
        <SearchForm>
          <HiddenLabel htmlFor="search" />
          <AInput
            type="text"
            name="search"
            placeholder="제목으로 검색해보세요."
          />
        </SearchForm>
        <SearchButton onClick={handleSubmit}>검색</SearchButton>
        <WriteButton type="submit" onClick={handleWrite}>
          글쓰기
        </WriteButton>
      </SearchAndWriteContainer>
      <Modal visible={modalVisible} onClose={handleWrite}>
        <>
          <label htmlFor="category">카테고리</label>
          <button
            type="button"
            onClick={() => handleCategory("study")}
            style={{
              backgroundColor: values.category === "study" ? "yellow" : "red",
            }}
          >
            스터디
          </button>
          <button
            type="button"
            onClick={() => handleCategory("project")}
            style={{
              backgroundColor: values.category === "project" ? "yellow" : "red",
            }}
          >
            프로젝트
          </button>
          <button
            type="button"
            onClick={() => handleCategory("club")}
            style={{
              backgroundColor: values.category === "club" ? "yellow" : "red",
            }}
          >
            동아리
          </button>
          <label htmlFor="title">제목</label>
          <Input
            type="text"
            name="title"
            onChange={handleChange}
            value={test}
          />

          {/* <label htmlFor="applicantCount">모집 인원</label>
          <Input type="text" name="applicantCount" onChange={handleChange} />
          <label htmlFor="deadLine">마감 날짜</label>
          <Input type="text" name="deadLine" onChange={handleChange} />
          <label htmlFor="content">내용</label>
          <Input type="text" name="content" onChange={handleChange} /> */}
          <Button onClick={handleModalClose}>등록</Button>
        </>
      </Modal>
      <GatherList selectedCategory={selectedCategory} gatherData={gatherData} />
    </Container>
  );
};

export default Gather;

/*
          <Input
            type="text"
            name="applicantCount"
            value={values.applicantCount}
          />
          <Input type="text" name="applicantCount" value={values.deadLine} />
          <Input type="text" name="category" value={values.category} />
          <Input type="text" name="title" value={values.title} />
          <Input type="text" name="content" value={values.content} />
*/
