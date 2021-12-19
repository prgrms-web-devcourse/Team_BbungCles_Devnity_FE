import { CourseKeyType, RoleKeyType } from "../constants";
import { ImageMarkerOverlayOptions } from "../utils/map/overlay";

export interface Position {
  lat: number;
  lng: number;
}
export interface Marker {
  position: Position;
  title?: string;
}

export interface ImageMarker {
  position: Position;
  imageUrl: string;
}

export interface ImageMarkerOverlay {
  position: Position;
  imageUrl?: string;
  options?: ImageMarkerOverlayOptions;
}

export interface Author {
  userId: number;
  name: string;
  course: CourseKeyType;
  generation: number;
  profileImgUrl: string | null;
  role: RoleKeyType;
}
export interface Mapgakco {
  mapgakcoId: number;
  status: "GATHERING" | "CLOSED" | "FULL" | "DELETED";
  title: string;
  location: string;
  meetingAt: string;
  latitude: number;
  longitude: number;
  applicantLimit: number;
  applicantCount: number;
  createdAt: string;
  author: Author;
}
