// eslint-disable-next-line import/no-extraneous-dependencies
import * as faker from "faker";

const courses = ["프론트", "백엔드", "인공지능"];
const roles = ["수강생", "매니저", "멘토"];

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
    name: faker.name.findName(),
    course: random(courses),
    generation: faker.datatype.number(),
    role: random(roles),
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
  },
};

const randomUserInfo = () => ({
  user: {
    userId: faker.datatype.uuid(),
    email: faker.internet.email(),
    name: faker.name.findName(),
    course: random(courses),
    generation: faker.datatype.number(),
    role: random(roles),
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
  },
});

export default randomUserInfo;

export type userInfoType = typeof userInfo;
