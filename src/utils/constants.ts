export const login = {
  message: {
    EMAIL_FORMAT_VALIDATION: "올바른 형태의 이메일을 입력해 주세요",
    EMAIL_REQUIRED_VALIDATION: "이메일을 입력해 주세요",
    PASSWORD_REQUIRED_VALIDATION: "비밀번호를 입력해 주세요",
  },
} as const;

export const signup = {
  message: {
    EMAIL_FORMAT_VALIDATION: "올바른 형태의 이메일을 입력해 주세요",
    EMAIL_REQUIRED_VALIDATION: "이메일을 입력해 주세요",
    NAME_REQUIRED_VALIDATION: "이름을 입력해 주세요",
    PASSWORD_REQUIRED_VALIDATION: "비밀번호를 입력해 주세요",
    CONFIRM_PASSWORD_REQUIRED_VALIDATION: "비밀번호 확인을 입력해 주세요",
    INCORRECT_PASSWORD_VALIDATION: "비밀번호가 일치하지 않습니다.",
    COURSE_REQUIRED_VALIDATION: "코스를 선택해 주세요",
    GENERATION_REQUIRED_VALIDATION: "기수를 선택해 주세요",
    ROLE_REQUIRED_VALIDATION: "역할을 선택해 주세요",
    COURSE_AND_GENERATION_REQUIRED_VALIDATION: "코스, 기수를 선택해 주세요",
  },

  text: {
    SIGNUP: "회원가입",
    NAME: "이름",
    EMAIL: "이메일",
    PASSWORD: "비밀번호",
    CONFIRM_PASSWORD: "비밀번호 확인",
    COURSE: "코스",
    GENERATION: "기수",
    ROLE: "역할",
  },

  selectDefaultLabel: {
    COURSE: "코스 선택",
    ROLE: "역할 선택",
    GENERATION: "기수 선택",
  },
} as const;
