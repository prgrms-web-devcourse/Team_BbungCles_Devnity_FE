import { UserMapInfo } from "../../../fixtures/userMapInfo";
import { Mapgakco, Position } from "../../types/mapTypes";

interface CustomOverlayProps {
  map: kakao.maps.Map;
  position: Position;
  content: HTMLElement;
}

export const addCustomOverlay = ({
  map,
  position,
  content,
}: CustomOverlayProps): kakao.maps.CustomOverlay => {
  const { lat, lng } = position;

  const overlayPosition = new kakao.maps.LatLng(lat, lng);

  const customOverlay = new kakao.maps.CustomOverlay({
    position: overlayPosition,
    content,
  });

  customOverlay.setMap(map);

  return customOverlay;
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

  if (imageUrl) {
    $image.src = imageUrl;
    $marker.appendChild($image);
  } else {
    const $circle = document.createElement("div");
    $circle.classList.add("marker__image");
    $marker.appendChild($circle);
  }

  $text.textContent = text;

  text && $marker.appendChild($text);

  const customOverlay = addCustomOverlay({ map, position, content: $marker });

  return customOverlay;
};

export const removeOverlay = (customOverlay: kakao.maps.CustomOverlay) => {
  customOverlay.setMap(null);
};

// TODO: 리팩터링. getUserMarkerOverlays와 getMapgakcoMarkerOverlays를 하나의 함수로 처리한다.
export const getUserMarkerOverlays = (userMapInfos: UserMapInfo[]) => {
  return userMapInfos.map((userMapInfo) => {
    const position = {
      lat: userMapInfo?.latitude,
      lng: userMapInfo?.longitude,
    };

    const imageUrl = userMapInfo.profileImgUrl;

    const options = {
      color: "blue",
      text: userMapInfo.name,
    };

    return { position, imageUrl, options };
  });
};

export const getMapgakcoMarkerOverlays = (mapgakcos: Mapgakco[]) => {
  return (mapgakcos || []).map((mapgakco) => {
    const position = {
      lat: mapgakco?.latitude,
      lng: mapgakco?.longitude,
    };

    const options = {
      color: "green",
      text: mapgakco.title,
    };

    return { position, options };
  });
};
