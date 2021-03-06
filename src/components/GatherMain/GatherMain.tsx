/* eslint-disable @typescript-eslint/no-explicit-any */
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import GatherList from "../GatherList/GatherList";
import Modal from "../base/Modal";
import GatherRegisterFormContainer from "../GatherRegisterForm/GatherRegistorFormContainer";
import SearchForm from "../SearchForm";
import { Container, SearchAndWriteContainer, WriteButton } from "./styles";
import useAddGather from "../../hooks/useAddGather";

interface Props {
  selectedCategory?: string;
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
  modalVisible,
  handleVisibleModal,
  pages,
  isLoading,
  hasNextPage,
  fetchNextPage,
  setFilters,
}: Props) => {
  const { addGather } = useAddGather();

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
        <WriteButton
          type="submit"
          width="15%"
          onClick={() => handleVisibleModal(true)}
        >
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
          submitForm={addGather}
        />
      </Modal>
      <div ref={ref}>
        <GatherList
          gatherRef={ref}
          gatherData={pages?.data?.data?.data?.values}
          pages={pages}
        />
      </div>
    </Container>
  );
};

export default GatherMain;
