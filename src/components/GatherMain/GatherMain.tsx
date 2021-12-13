import React from "react";
import GatherList from "../GatherList/GatherList";
import Modal from "../base/Modal";
import {
  Container,
  SearchAndWriteContainer,
  SearchForm,
  HiddenLabel,
  AInput,
  SearchButton,
  WriteButton,
} from "./styles";
import GatherRegisterFormContainer from "../GatherRegisterForm/GatherRegistorFormContainer";

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

interface Props {
  selectedCategory?: string;
  gatherData: Array<GatherData>;
  modalVisible: boolean;
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleVisibleModal: (isModalVisible: boolean) => void;
}

const GatherMain = ({
  selectedCategory,
  gatherData,
  modalVisible,
  handleSubmit,
  handleVisibleModal,
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
        <WriteButton type="submit" onClick={() => handleVisibleModal(true)}>
          글쓰기
        </WriteButton>
      </SearchAndWriteContainer>
      <Modal visible={modalVisible} onClose={() => handleVisibleModal(false)}>
        <GatherRegisterFormContainer
          onModalClose={() => handleVisibleModal(false)}
        />
      </Modal>
      <GatherList selectedCategory={selectedCategory} gatherData={gatherData} />
    </Container>
  );
};

export default GatherMain;

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
