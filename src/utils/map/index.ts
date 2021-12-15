import { Position } from "../../types/mapTypes";

export const addControl = (map: kakao.maps.Map) => {
  const mapTypeControl = new kakao.maps.MapTypeControl();
  map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

  const zoomControl = new kakao.maps.ZoomControl();
  map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
};

interface CustomOverlayProps {
  map: kakao.maps.Map;
  position: Position;
  content: HTMLElement;
}

export const addCustomOverlay = ({
  map,
  position,
  content,
}: CustomOverlayProps) => {
  const { latitude, longitude } = position;

  const overlayPosition = new kakao.maps.LatLng(latitude, longitude);

  const customOverlay = new kakao.maps.CustomOverlay({
    position: overlayPosition,
    content,
  });

  customOverlay.setMap(map);
};

interface ImageOverlayProps {
  map: kakao.maps.Map;
  position: Position;
  imageUrl: string;
}

export const addImageOverlayMarker = ({
  map,
  position,
  imageUrl,
}: ImageOverlayProps) => {
  const $marker = document.createElement("div");
  $marker.classList.add("marker");

  const $image = document.createElement("img");
  $image.classList.add("marker__image");
  $image.src = imageUrl;

  $marker.appendChild($image);

  addCustomOverlay({ map, position, content: $marker });
};

interface MarkerProps {
  map: kakao.maps.Map;
  position: Position;
}

export const addMarker = ({ map, position }: MarkerProps) => {
  const { latitude, longitude } = position;

  const markerPosition = new kakao.maps.LatLng(latitude, longitude);

  const marker = new kakao.maps.Marker({
    position: markerPosition,
  });

  marker.setMap(map);
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

  const { latitude, longitude } = position;

  const markerPosition = new kakao.maps.LatLng(latitude, longitude); // 마커가 표시될 위치입니다

  const marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage,
  });

  marker.setMap(map);
};
