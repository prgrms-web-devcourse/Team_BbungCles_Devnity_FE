import { CourseKeyType, MbtiKeyType, RoleKeyType } from "../constants";

interface User {
  userId: string;
  email: string;
  name: string;
  course: CourseKeyType;
  role: RoleKeyType;
  generation: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface Introduction {
  introductionId: string;
  profileImgUrl: string;
  mbti: MbtiKeyType;
  blogUrl: string;
  githubUrl: string;
  summary: string;
  latitude: number;
  longitude: number;
  createdAt: Date;
  updatedAt: Date;

  likeCount: number;
  isLike: boolean;
  commentCount: number;
}
export interface UserInfo {
  user: User;
  introduction: Introduction;
}
