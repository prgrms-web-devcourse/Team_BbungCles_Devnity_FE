import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import useSearchResults from "../../hooks/useSearchResults";
import Input from "../base/Input";
import {
  PlaceSearchFromContainer,
  SearchResultForm,
  SearchResultListContainer,
} from "./styles";

interface Props {
  onSubmit: (inputValue: string) => void;
}

const PlaceSearchForm = ({ onSubmit }: Props) => {
  const [content, setContent] = useState("소제이");

  const { data: searchResults } = useSearchResults(content);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setContent(value);
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit(searchResults[0]);
    },
    [onSubmit, searchResults]
  );

  const handleClick = useCallback(
    (place) => () => {
      onSubmit(place);
    },
    [onSubmit]
  );

  const inputStyle = {
    fontSize: "16px",
    padding: "12px",
    borderRadius: "8px",
  };

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
        <ul>
          {(searchResults || []).slice(0, 5).map((place, index) => {
            const key = `search-${index}`;

            return (
              <li
                key={key}
                onClick={handleClick(place)}
                onKeyPress={handleClick(place)}
                role="presentation"
              >
                <div>{place.place_name}</div>
                <div>{place.address_name}</div>
                <div>{place.road_address_name}</div>
              </li>
            );
          })}
        </ul>
      </SearchResultListContainer>
    </PlaceSearchFromContainer>
  );
};

export default PlaceSearchForm;
