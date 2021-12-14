import { atom } from "recoil";
import { UserData } from "../components/MyProfile/types";
import { UserInfo } from "../types/userInfo";

export const globalMyProfile = atom<UserData | null>({
  key: "globalMyProfile",
  default: null,
});

export const currentUserState = atom<UserInfo | null>({
  key: "currentUser",
  default: null,
});
