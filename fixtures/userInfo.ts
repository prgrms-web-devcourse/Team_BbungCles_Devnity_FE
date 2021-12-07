// eslint-disable-next-line import/no-extraneous-dependencies
import * as faker from "faker";
import { course, role } from "../src/constants/index";

const random = (array) => {
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

const userInfo = {
  user: {
    userId: faker.datatype.uuid(),
    email: faker.internet.email(),
    name: faker.name.firstName(),
    course: random(Object.keys(course)),
    generation: faker.datatype.number(),
    role: random(Object.keys(role)),
    createdAt: faker.datatype.datetime(),
    updatedAt: faker.datatype.datetime(),
  },

  introduction: {
    introductionId: faker.datatype.uuid(),
    profileImgUrl: faker.image.imageUrl(),
    mbti: mbti(),
    blogUrl: faker.internet.url(),
    githubUrl: faker.internet.url(),
    summary: faker.lorem.sentence(),
    latitude: faker.address.latitude(),
    longitude: faker.address.longitude(),
    createdAt: faker.datatype.datetime(),
    updatedAt: faker.datatype.datetime(),

    likeCount: faker.datatype.number(),
    isLike: faker.datatype.boolean(),
    commentCount: faker.datatype.number(),
  },
};

const randomUserInfo = () => ({
  user: {
    userId: faker.datatype.uuid(),
    email: faker.internet.email(),
    name: faker.name.firstName(),
    course: random(Object.keys(course)),
    generation: faker.datatype.number(),
    role: random(Object.keys(role)),
    createdAt: faker.datatype.datetime(),
    updatedAt: faker.datatype.datetime(),
  },

  introduction: {
    introductionId: faker.datatype.uuid(),
    profileImgUrl: faker.image.imageUrl(),
    mbti: mbti(),
    blogUrl: faker.internet.url(),
    githubUrl: faker.internet.url(),
    summary: faker.lorem.sentence(),
    latitude: faker.address.latitude(),
    longitude: faker.address.longitude(),
    createdAt: faker.datatype.datetime(),
    updatedAt: faker.datatype.datetime(),

    likeCount: faker.datatype.number(),
    isLike: faker.datatype.boolean(),
    commentCount: faker.datatype.number(),
  },
});

export default randomUserInfo;

export type userInfoType = typeof userInfo;
