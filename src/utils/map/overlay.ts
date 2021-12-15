import { Position } from "../../types/mapTypes";

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
  const { lat, lng } = position;

  const overlayPosition = new kakao.maps.LatLng(lat, lng);

  const customOverlay = new kakao.maps.CustomOverlay({
    position: overlayPosition,
    content,
  });

  customOverlay.setMap(map);
};

export interface ImageMarkerOverlayOptions {
  color?: "red" | "green" | "blue" | string;
  text?: string;
}

interface ImageMarkerOverlayProps {
  map: kakao.maps.Map;
  position: Position;
  imageUrl: string;
  options?: ImageMarkerOverlayOptions;
}

export const addImageMarkerOverlay = ({
  map,
  position,
  imageUrl,
  options = { color: "red", text: "" },
}: ImageMarkerOverlayProps) => {
  const $marker = document.createElement("div");
  const $image = document.createElement("img");
  const $text = document.createElement("span");

  const { color, text } = options;

  if (color === "red") {
    $marker.classList.add("marker");
  } else if (color === "blue") {
    $marker.classList.add("marker--blue");
  } else if (color === "green") {
    $marker.classList.add("marker--green");
  } else {
    $marker.classList.add("marker");
  }

  $image.classList.add("marker__image");
  $text.classList.add("marker__text");

  $image.src = imageUrl;
  $text.textContent = text;

  $marker.appendChild($image);

  text && $marker.appendChild($text);

  addCustomOverlay({ map, position, content: $marker });
};
