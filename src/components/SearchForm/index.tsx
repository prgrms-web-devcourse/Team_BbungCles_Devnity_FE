import { useState } from "react";
import Input from "../base/Input";
import {
  HiddenLabel,
  SearchButton,
  Container,
  searchInputStyle,
} from "./styles";

const SearchForm = () => {
  const [state, setState] = useState("");

  const handleChange = (e) => {
    setState(e.target.value);
  };

  // TODO: 검색 API를 호출하도록 연동해야한다.
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Container>
        <HiddenLabel htmlFor="search" />
        <Input
          type="text"
          name="search"
          value={state}
          placeholder="제목으로 검색해보세요."
          customStyle={searchInputStyle}
          onChange={handleChange}
        />
      </Container>
      <SearchButton onClick={handleSubmit}>검색</SearchButton>
    </>
  );
};

export default SearchForm;