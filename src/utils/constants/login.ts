interface Constant {
  [key: string]: {
    [key: string]: string;
  };
}

export default {
  message: {
    EMAIL_FORMAT_VALIDATION: "올바른 형태의 이메일을 입력해 주세요",
    EMAIL_REQUIRED_VALIDATION: "이메일을 입력해 주세요",
    PASSWORD_REQUIRED_VALIDATION: "비밀번호를 입력해 주세요",
    UNKNOWN_ERROR: "알 수 없는 에러입니다.",
  },

  text: {
    EMAIL: "이메일",
    PASSWORD: "비밀번호",
    LOGIN: "로그인",
  },
} as Constant;
