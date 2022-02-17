import * as faker from "faker/locale/ko";
import { UserData } from "../src/components/MyProfile/types";
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

const generateRandomUserData = (): UserData => ({
  introduction: {
    blogUrl: faker.internet.url(),
    githubUrl: faker.internet.url(),
    introductionId: +faker.datatype.uuid(),
    latitude: +faker.address.latitude(37.597846162982, 37.469538697168495),
    longitude: +faker.address.longitude(127.13984731519888, 126.9253883715795),
    createdAt: faker.datatype.datetime().toString(),
    updatedAt: faker.datatype.datetime().toString(),
    mbti: mbti() as MbtiKeyType,
    profileImgUrl: `https://picsum.photos/400/300?${Math.random()}`,
    summary: faker.lorem.sentence(),
    description: faker.lorem.sentence(),
  },

  user: {
    course: random<CourseKeyType>(Object.keys(course) as CourseKeyType[]),
    email: faker.internet.email(),
    generation: faker.datatype.number({
      min: 0,
      max: 12,
    }),
    name: faker.name.firstName(),
    role: random<RoleKeyType>(Object.keys(role) as RoleKeyType[]),
    userId: +faker.datatype.uuid(),
    createdAt: faker.datatype.datetime().toString(),
  },
});

export default generateRandomUserData;
