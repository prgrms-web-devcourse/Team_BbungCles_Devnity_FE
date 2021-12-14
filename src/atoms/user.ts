import { atom } from "recoil";
import { UserData } from "../components/MyProfile/types";

export const globalMyProfile = atom<UserData | null>({
  key: "globalMyProfile",
  default: null,
});

export const currentUserState = atom({
  key: "currentUser",
  default: null,
});
