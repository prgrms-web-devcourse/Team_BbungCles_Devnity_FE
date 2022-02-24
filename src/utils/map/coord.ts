import { CartesianPosition, Position } from "../../types/commonTypes";

export const toCoordFromPosition = (position: Position): CartesianPosition => {
  return {
    x: position.lng,
    y: position.lat,
  };
};
