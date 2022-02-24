import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import useSearchResults from "../../../hooks/useSearchResults";
import { Input } from "../../base/Input";
import {
  PlaceSearchFromContainer,
  SearchResultForm,
  SearchResultListContainer,
} from "../styles";
import SearchResultList from "./SearchResultList";

interface Props {
  isUserClicked: boolean;
  onSubmit: (inputValue: string) => void;
}

const PlaceSearchForm = ({ isUserClicked, onSubmit }: Props) => {
  const [content, setContent] = useState("");

  const { data: searchResults } = useSearchResults(content);

  const inputStyle = {
    fontSize: "16px",
    padding: "12px",
    borderRadius: "8px",
  };

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setContent(value);
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit(searchResults?.[0]);

      setContent("");
    },
    [onSubmit, searchResults]
  );

  const handleClick = useCallback(
    (place) => () => {
      onSubmit(place);
    },
    [onSubmit]
  );

  useEffect(() => {
    if (isUserClicked) {
      setContent("");
    }
  }, [isUserClicked]);

  return (
    <PlaceSearchFromContainer>
      <SearchResultForm onSubmit={handleSubmit}>
        <Input
          customStyle={inputStyle}
          type="text"
          name="search"
          value={content}
          placeholder="검색"
          onChange={handleChange}
          autoComplete="off"
        />
      </SearchResultForm>
      <SearchResultListContainer>
        <SearchResultList results={searchResults} onClick={handleClick} />
      </SearchResultListContainer>
    </PlaceSearchFromContainer>
  );
};

export default PlaceSearchForm;
