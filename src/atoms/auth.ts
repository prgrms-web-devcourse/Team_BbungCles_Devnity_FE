import { atom } from "recoil";
import { login } from "../constants";
import { getLocalStorageItem } from "../utils/functions";

export const authState = atom({
  key: "auth",
  default: getLocalStorageItem(login.localStorageKey.TOKEN, null),
});
