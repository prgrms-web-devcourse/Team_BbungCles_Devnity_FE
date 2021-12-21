/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import GatherList from "../GatherList/GatherList";
import Modal from "../base/Modal";
import GatherRegisterFormContainer from "../GatherRegisterForm/GatherRegistorFormContainer";
import SearchForm from "../SearchForm";
import { Container, SearchAndWriteContainer, WriteButton } from "./styles";
// import { Gather } from "../../types/gather";

interface Props {
  selectedCategory?: string;
  // gatherData: Array<Gather>;
  modalVisible: boolean;
  handleVisibleModal: (isModalVisible: boolean) => void;
  pages: any;
  isLoading: any;
  hasNextPage: any;
  fetchNextPage: any;
  setFilters: any;
}

const GatherMain = ({
  selectedCategory,
  //  gatherData,
  modalVisible,
  handleVisibleModal,
  pages,
  isLoading,
  hasNextPage,
  fetchNextPage,
  setFilters,
}: Props) => {
  const [ref, inView] = useInView({ threshold: 0.8 });

  useEffect(() => {
    if (inView && hasNextPage && !isLoading) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView, hasNextPage, isLoading]);

  return (
    <Container>
      <SearchAndWriteContainer>
        <SearchForm
          selectedCategory={selectedCategory}
          setFilters={setFilters}
        />
        <WriteButton type="submit" onClick={() => handleVisibleModal(true)}>
          글쓰기
        </WriteButton>
      </SearchAndWriteContainer>
      <Modal
        width="60%"
        visible={modalVisible}
        onClose={() => handleVisibleModal(false)}
      >
        <GatherRegisterFormContainer
          onModalClose={() => handleVisibleModal(false)}
        />
      </Modal>
      <div ref={ref}>
        <GatherList
          // pages={pages}
          // isLoading={isLoading}
          // hasNextPage={hasNextPage}
          // fetchNextPage={fetchNextPage}
          gatherRef={ref}
          selectedCategory={selectedCategory}
          gatherData={pages?.data?.data?.data?.values}
          pages={pages}
        />
      </div>
    </Container>
  );
};

export default GatherMain;
