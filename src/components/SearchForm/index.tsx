/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Input from "../base/Input";
import {
  HiddenLabel,
  SearchButton,
  Container,
  searchInputStyle,
} from "./styles";

interface Props {
  selectedCategory: string;
  setFilters: any;
}

const SearchForm = ({ selectedCategory, setFilters }: Props) => {
  const [state, setState] = useState("");

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFilters({
      title: state,
      category: selectedCategory || null,
      lastId: null,
      size: 19,
    });
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
