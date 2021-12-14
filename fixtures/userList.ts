// eslint-disable-next-line import/no-extraneous-dependencies
import * as faker from "faker";
import { User } from "../src/components/UserList/types";
import {
  course,
  role,
  CourseKeyType,
  MbtiKeyType,
  RoleKeyType,
} from "../src/constants";

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

const randomUsers = (): User => ({
  user: {
    userId: faker.datatype.number(),
    name: faker.name.firstName(),
    course: random<CourseKeyType>(Object.keys(course) as CourseKeyType[]),
    generation: Math.floor(Math.random() * 100),
    role: random<RoleKeyType>(Object.keys(role) as RoleKeyType[]),
  },
  introduction: {
    introductionId: faker.datatype.number(),
    profileImgUrl: faker.image.imageUrl(),
    mbti: mbti() as MbtiKeyType,
    summary: faker.lorem.sentence(),
    likeCount: faker.datatype.number(),
    commentCount: faker.datatype.number(),
  },
});

export default randomUsers;
