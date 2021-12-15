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
  imageUrl: string;
  options?: ImageMarkerOverlayOptions;
}
