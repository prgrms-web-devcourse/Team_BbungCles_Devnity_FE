import randomUserInfo from "./userInfo";

const randomUserMapInfo = (): typeof userMapInfo => {
  const userInfo = randomUserInfo();

  const userMapInfo = {
    userId: userInfo.user.userId,
    name: userInfo.user.name,
    course: userInfo.user.course,
    generation: userInfo.user.generation,
    profileImgUrl: userInfo.introduction.profileImgUrl,
    latitude: userInfo.introduction.latitude,
    longitude: userInfo.introduction.longitude,
  };

  return userMapInfo;
};

export default randomUserMapInfo;

export type UserMapInfo = ReturnType<typeof randomUserMapInfo>;
