import { Position } from "../../types/commonTypes";

export const isEqualPosition = (a: Position, b: Position) => {
  return a.lat === b.lat && a.lng === b.lng;
};
