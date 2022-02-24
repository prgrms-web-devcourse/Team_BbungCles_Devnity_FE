import { PlaceModel } from "../../../types/place";

interface Props {
  results: PlaceModel[];
  onClick: (place: PlaceModel) => () => void;
}

const SearchResultList = ({ results, onClick }: Props) => {
  return (
    <ul>
      {(results || []).slice(0, 5).map((place, index) => {
        const key = `search-${index}`;

        return (
          <li
            key={key}
            onClick={onClick(place)}
            onKeyPress={onClick(place)}
            role="presentation"
          >
            <div>{place.place_name}</div>
            <div>{place.address_name}</div>
            <div>{place.road_address_name}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResultList;
