import { addMarkerFromPosition } from ".";
import { Position } from "../../types/commonTypes";

let placeService = null;
const keywordMarkers: kakao.maps.Marker[] = [];

const removeKeywordMarkers = () => {
  keywordMarkers.forEach((marker) => {
    marker.setMap(null);
  });
};

export const keywordSearch = (map: kakao.maps.Map, keyword: string) => {
  if (!keyword) {
    return;
  }

  if (!placeService) {
    placeService = new kakao.maps.services.Places();
  }

  const callback = (data, status) => {
    if (status !== kakao.maps.services.Status.OK) {
      return;
    }

    const bounds = new kakao.maps.LatLngBounds();

    const positions: Position[] = data.map((place) => {
      const position = {
        lat: place.y,
        lng: place.x,
      };

      return position;
    });

    removeKeywordMarkers();

    positions.forEach((position) => {
      const marker = addMarkerFromPosition({ map, position });

      keywordMarkers.push(marker);

      bounds.extend(new kakao.maps.LatLng(position.lat, position.lng));
    });

    map.setBounds(bounds);
  };

  placeService.keywordSearch(keyword, callback);
};
