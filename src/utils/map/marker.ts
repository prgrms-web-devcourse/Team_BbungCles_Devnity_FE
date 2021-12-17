import { Position } from "../../types/mapTypes";

export const createMarker = (position: Position): kakao.maps.Marker => {
  const { lat, lng } = position;

  const markerPosition = new kakao.maps.LatLng(lat, lng);

  return new kakao.maps.Marker({
    position: markerPosition,
  });
};

interface MarkerFromPositionProps {
  map: kakao.maps.Map;
  position: Position;
}

export const addMarkerFromPosition = ({
  map,
  position,
}: MarkerFromPositionProps): kakao.maps.Marker => {
  const marker = createMarker(position);

  marker.setMap(map);

  return marker;
};

interface MarkerProps {
  map: kakao.maps.Map;
  marker: kakao.maps.Marker;
}

export const addMarker = ({ map, marker }: MarkerProps) => {
  marker.setMap(map);
};

export const removeMarker = (marker: kakao.maps.Marker) => {
  marker.setMap(null);
};
interface ImageMarkerProps {
  map: kakao.maps.Map;
  position: Position;
  imageUrl: string;
}

export const addImageMarker = ({
  map,
  position,
  imageUrl,
}: ImageMarkerProps) => {
  const imageSize = new kakao.maps.Size(64, 69); // 마커이미지의 크기입니다
  const imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

  const markerImage = new kakao.maps.MarkerImage(
    imageUrl,
    imageSize,
    imageOption
  );

  const { lat, lng } = position;

  const markerPosition = new kakao.maps.LatLng(lat, lng); // 마커가 표시될 위치입니다

  const marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage,
  });

  marker.setMap(map);
};
