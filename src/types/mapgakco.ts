import { CourseKeyType, RoleKeyType } from "../constants";
import { StatusKeyType } from "../constants/status";

export interface RequestGetMapgakcosRange {
  currentNEY: number;
  currentNEX: number;
  currentSWY: number;
  currentSWX: number;
}

export interface ResponseMapgakco {
  mapgakcoId: number;
  applicantLimit: number;
  applicantCount: number;
  status: StatusKeyType;
  title: string;
  content: string;
  location: string;
  latitude: number;
  longitude: number;
  meetingAt: string;
  createdAt: string;
  modifiedAt: string;
}

export interface ResponseAuthor {
  userId: number;
  name: string;
  course: string;
  generation: number;
  profileImgUrl: string | null;
  role: RoleKeyType;
}

export interface ResponseApplicant {
  userId: number;
  name: string;
  course: CourseKeyType;
  generation: number;
  profileImgUrl: null;
  role: RoleKeyType;
}

export interface ResponseComment {
  commentId: number;
  content: string;
  status: "POSTED" | "DELETED";
  createdAt: string;
  modifiedAt: string;
  author: ResponseAuthor;
  children: ResponseComment[] | null;
}

export interface ResponseGetMapgakcoDetail {
  mapgakco: ResponseMapgakco;
  author: ResponseAuthor;
  applicants: ResponseApplicant[];
  comments: ResponseComment[];
}
