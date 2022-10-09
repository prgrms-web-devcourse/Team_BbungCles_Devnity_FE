// eslint-disable-next-line max-classes-per-file
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

export class GuestUser implements User {
  userId = "GUEST";

  email = "GUEST";

  name = "GUEST";

  course = "FE" as CourseKeyType;

  role = "MANAGER" as RoleKeyType;

  generation = 0;

  createdAt = new Date();

  updatedAt = new Date();
}

export class GuestIntroduction implements Introduction {
  introductionId = "GUEST";

  profileImgUrl = "";

  mbti = "ISTJ" as MbtiKeyType;

  blogUrl = "";

  githubUrl = "";

  summary = "";

  latitude = 0;

  longitude = 0;

  createdAt = new Date();

  updatedAt = new Date();

  likeCount = 0;

  isLike = false;

  commentCount = 0;
}
