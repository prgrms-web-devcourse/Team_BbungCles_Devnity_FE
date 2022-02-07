import { CourseKeyType } from "../constants";

export interface RequestGetUsersLocations {
  course?: CourseKeyType;
  generation?: number | string;
  currentNEX: number;
  currentNEY: number;
  currentSWX: number;
  currentSWY: number;
}

export interface UserLocationModel {
  userId: number;
  name: string;
  course: CourseKeyType;
  generation: number;
  profileImgUrl: string;
  latitude: number;
  longitude: number;
}
