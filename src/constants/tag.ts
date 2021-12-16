import { mbti, role } from "./index";

export const tagName = {
  ROLE: "role",
  MBTI: "mbti",
  COURSE: "course",
} as const;

export const tagMap = {
  role,
  mbti,
};

export type TagMapKeyType = keyof typeof tagMap;
export type TagMapValueType = typeof tagMap[keyof typeof tagMap];
export type TagMapRoleKeyType = keyof typeof tagMap.role;
export type TagMapMbtiKeyType = keyof typeof tagMap.mbti;
