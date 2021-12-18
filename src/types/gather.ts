import { Comment } from "./comment";
import { SimpleUserInfo } from "./simpleUserInfo";

export interface Gather {
  gatherId?: number;
  status: string;
  title: string;
  content?: string;
  category?: string;
  deadline?: string;
  createdAt: string;
  modifiedAt?: string;
  author: SimpleUserInfo;
  applicantLimit: number;
  view?: number;
  applicantCount: number;
  commentCount?: number;
  isApplied?: boolean;
  participants?: Array<SimpleUserInfo>;
  comments?: Array<Comment>;

  mapgakcoId?: number;
  location?: string;
  latitude?: number;
  longitude?: number;
  meetingAt?: string;
}

export interface Mapgakco {
  mapgakcoId: number;
  applicantLimit: number;
  applicantCount: number;
  status: string;
  title: string;
  content: string;
  location: string;
  latitude: number;
  longitude: number;
  meetingAt: number;
  createdAt: number;
  modifiedAt?: number;

  author: SimpleUserInfo;
  applicants?: Array<SimpleUserInfo>;
  comments?: Array<Comment>;
}
