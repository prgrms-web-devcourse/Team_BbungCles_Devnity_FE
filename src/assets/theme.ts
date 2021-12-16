import { tagName } from "../constants";

const theme = {
  colors: {
    primary: "#ffb266",
    fontColor: "#4d5256",
    disabled: "#c0c0c0",
    black: "#000",
    white: "#fff",
    orange100: "#ffd9b3",
    orange200: "#ffcc99",
    orange300: "#ffbf80",
    orange400: "#ffb266",
    orange500: "#ffb266",
    orange600: "#ffa54d",
    orange700: "#ff9833",
    orange800: "#ff8c1a",
    gray100: "#f1f5f5",
    gray200: "#eaeeef",
    gray300: "#e1e4e6",
    gray400: "#ced3d6",
    gray500: "#a9afb3",
    gray600: "#878d91",
    gray700: "#4d5256",
    gray800: "#363a3c",
    pink: "#ffb0ba",
    coral: "#ffb09b",
    olive: "#d8c573",
    skyblue: "#66b3ff",
    mint: "#66ffb2",
    scarlet: "#ff6667",
    yellow: "#ffff66",
    ultramarine: "#6667ff",
    [tagName.ROLE]: {
      STUDENT: "#ffff66",
      MANAGER: "#66b3ff",
      MENTOR: "#66ffb2",
    },
    [tagName.MBTI]: {
      ENFP: "#e4d1ce",
      INFP: "#f6fbe5",
      ENTP: "#dbe9ec",
      INTP: "#f5eaec",
      ESFJ: "#d4efc3",
      ISFJ: "#e6f9dd",
      ESTJ: "#f7f4dd",
      ISTJ: "#fce5fc",
      ENFJ: "#eee0ec",
      INFJ: "#ced1f3",
      ESTP: "#dceadd",
      ISTP: "#e0e1fd",
      ESFP: "#cec6ed",
      ISFP: "#d5ece9",
      ENTJ: "#fac7d3",
      INTJ: "#f5e1fa",
    },
    [tagName.COURSE]: {
      FE: "#ffb266",
      BE: "#6667ff",
      AI: "#ff6667",
    },
  },
  boxShadows: {
    primary: `0 2px 5px 1px #363a3c25`,
  },
};

export default theme;

export type ColorType = keyof typeof theme.colors;
export type ShadowType = keyof typeof theme.boxShadows;
export type ThemeType = typeof theme;
