import { UserData } from "../../components/MyProfile/types";
import { common } from "../../constants";
import { Mapgakco, Position } from "../../types/mapTypes";
import { ResponseUserLocation } from "../../types/userLocation";
import { koreanDate } from "../date";

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

interface MapgakcoOverlayProps {
  map: kakao.maps.Map;
  mapgakco: Mapgakco;
}

export const addMapgakcoOverlay = ({ map, mapgakco }: MapgakcoOverlayProps) => {
  const {
    mapgakcoId,
    status,
    title,
    location,
    meetingAt,
    latitude,
    longitude,
    applicantLimit,
    applicantCount,
    // author,
  } = mapgakco;

  // const { name, profileImageUrl } = author;

  const $mapgakco = document.createElement("div");
  const $header = document.createElement("header");
  const $status = document.createElement("span");
  const $section = document.createElement("section");
  const $title = document.createElement("a");
  const $list = document.createElement("ul");
  const $row1 = document.createElement("li");
  const $rowItem1 = document.createElement("div");
  const $row2 = document.createElement("li");
  const $rowItem2 = document.createElement("li");
  const $row3 = document.createElement("li");
  const $rowItem3 = document.createElement("div");

  $mapgakco.classList.add("mapgakco");
  $header.classList.add("mapgakco__header");
  $status.classList.add("mapgakco__status");
  $section.classList.add("mapgakco__section");
  $title.classList.add("mapgakco__title");
  $list.classList.add("mapgakco__list");
  $row1.classList.add("mapgakco__row");
  $rowItem1.classList.add("mapgakco__row-item");
  $row2.classList.add("mapgakco__row");
  $rowItem2.classList.add("mapgakco__row-item");
  $row3.classList.add("mapgakco__row");
  $rowItem3.classList.add("mapgakco__row-item");

  $status.textContent = status;
  $title.textContent = title;
  $title.href = `/mapgakcos/${mapgakcoId}`;

  $rowItem1.textContent = koreanDate(new Date(meetingAt));
  $rowItem2.textContent = `${applicantCount} / ${applicantLimit} 명`;
  $rowItem3.textContent = location;

  $mapgakco.appendChild($header);
  $header.appendChild($status);
  $mapgakco.appendChild($section);
  $section.appendChild($title);
  $section.appendChild($list);
  $list.appendChild($row1);
  $row1.appendChild($rowItem1);
  $list.appendChild($row2);
  $row2.appendChild($rowItem2);
  $list.appendChild($row3);
  $row3.appendChild($rowItem3);

  const customOverlay = addCustomOverlay({
    map,
    position: { lat: latitude, lng: longitude },
    content: $mapgakco,
  });

  customOverlay.setMap(map);

  return customOverlay;
};

// TODO: 리팩터링. getUserMarkerOverlays와 getMapgakcoMarkerOverlays를 하나의 함수로 처리한다.
export const getUserMarkerOverlays = (
  usersLocations: ResponseUserLocation[],
  currentUser: UserData
) => {
  return (usersLocations || []).map((userLocation) => {
    const position = {
      lat: userLocation?.latitude,
      lng: userLocation?.longitude,
    };

    const imageUrl = userLocation?.profileImgUrl || common.placeHolderImageSrc;

    const options = {
      color: userLocation?.userId === currentUser.user.userId ? "red" : "blue",
      text: userLocation?.name,
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

    return { position, options, mapgakco };
  });
};
