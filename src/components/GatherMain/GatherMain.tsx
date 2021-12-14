import GatherList from "../GatherList/GatherList";
import Modal from "../base/Modal";
import GatherRegisterFormContainer from "../GatherRegisterForm/GatherRegistorFormContainer";
import SearchForm from "../SearchForm";
import { Container, SearchAndWriteContainer, WriteButton } from "./styles";

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
  handleVisibleModal: (isModalVisible: boolean) => void;
}

const GatherMain = ({
  selectedCategory,
  gatherData,
  modalVisible,
  handleVisibleModal,
}: Props) => {
  return (
    <Container>
      <SearchAndWriteContainer>
        <SearchForm />
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
