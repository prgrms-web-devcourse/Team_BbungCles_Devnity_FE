import { GuestIntroduction, GuestUser } from "../types/userInfo";

const useGuestProfile = () => {
  return {
    data: {
      user: new GuestUser(),
      introduction: new GuestIntroduction(),
    },
  };
};

export default useGuestProfile;
