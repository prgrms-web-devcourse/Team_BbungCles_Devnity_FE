// eslint-disable-next-line import/no-extraneous-dependencies
import * as faker from "faker/locale/ko";
import {
  course,
  role,
  CourseKeyType,
  MbtiKeyType,
  RoleKeyType,
} from "../src/constants/index";

const random = <Type>(array: Type[]): Type => {
  const randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
};

const mbti = () => {
  return (
    random(["E", "I"]) +
    random(["N", "S"]) +
    random(["F", "T"]) +
    random(["J", "P"])
  );
};

interface User {
  userId: string;
  email: string;
  name: string;
  course: CourseKeyType;
  role: RoleKeyType;
  generation: number;
  createdAt: Date;
  updatedAt: Date;
}

interface Introduction {
  introductionId: string;
  profileImgUrl: string;
  mbti: MbtiKeyType;
  blogUrl: string;
  githubUrl: string;
  summary: string;
  latitude: string | number;
  longitude: string | number;
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

const randomUserInfo = (): UserInfo => ({
  user: {
    userId: faker.datatype.uuid(),
    email: faker.internet.email(),
    name: faker.name.firstName(),
    course: random<CourseKeyType>(Object.keys(course) as CourseKeyType[]),
    generation: faker.datatype.number({
      min: 0,
      max: 12,
    }),
    role: random<RoleKeyType>(Object.keys(role) as RoleKeyType[]),
    createdAt: faker.datatype.datetime(),
    updatedAt: faker.datatype.datetime(),
  },

  introduction: {
    introductionId: faker.datatype.uuid(),
    profileImgUrl: `https://picsum.photos/400/300?${Math.random()}`,
    mbti: mbti() as MbtiKeyType,
    blogUrl: faker.internet.url(),
    githubUrl: faker.internet.url(),
    summary: faker.lorem.sentence(),
    latitude: faker.address.latitude(131.87222222, 124.19583333),
    longitude: faker.address.longitude(43.00972222, 33.11111111),
    createdAt: faker.datatype.datetime(),
    updatedAt: faker.datatype.datetime(),

    likeCount: faker.datatype.number({
      min: 0,
      max: 128,
    }),
    isLike: faker.datatype.boolean(),
    commentCount: faker.datatype.number({
      min: 0,
      max: 128,
    }),
  },
});

export default randomUserInfo;
