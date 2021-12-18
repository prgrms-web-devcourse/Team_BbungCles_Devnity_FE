import { atom } from "recoil";
import theme from "../assets/theme";

export const topbarBgColorState = atom({
  key: "topbarBgColor",
  default: `${theme.colors.white}`,
});
