import GatherList from "../GatherList/GatherList";
import {
  Container,
  SearchAndWriteContainer,
  SearchForm,
  HiddenLabel,
  Input,
  SearchButton,
  WriteButton,
} from "./styles";

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
}

interface Props {
  selectedCategory?: string;
  gatherData: Array<GatherData>;
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void; // () => void; // (event: React.FormEvent<HTMLFormElement>) => void; // (form: { name: string; description: string }) => void;
  handleWrite: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Gather = ({
  selectedCategory,
  gatherData,
  handleSubmit,
  handleWrite,
}: Props) => {
  return (
    <Container>
      <SearchAndWriteContainer>
        <SearchForm>
          <HiddenLabel htmlFor="search" />
          <Input
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
      <GatherList selectedCategory={selectedCategory} gatherData={gatherData} />
    </Container>
  );
};

export default Gather;
