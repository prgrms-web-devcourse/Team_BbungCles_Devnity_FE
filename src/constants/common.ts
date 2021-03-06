export default {
  text: {
    SIGNUP: "회원가입",
    NAME: "이름",
    EMAIL: "이메일",
    GENERATION: "기수",
    COURSE: "코스",
    ROLE: "역할",
    PASSWORD: "비밀번호",
    CONFIRM_PASSWORD: "비밀번호 확인",
    MBTI: "MBTI",
    GITHUB: "깃허브",
    BLOG: "블로그",
    SUMMARY: "한줄 소개",
    DESCRIPTION: "자기 소개",
    SEARCH: "검색",
    WRITE: "작성",
    SET_MY_LOCATION: "내 위치 설정",
  },

  message: {
    ENTER_SEARCH_TERM: "이름을 입력해 주세요",
    ENTER_COMMENT: "댓글을 입력해 주세요",
    UNKNOWN_ERROR: "알수없는 오류입니다. 다시 시도해주세요.",
    EXPIRE_OR_SERVER_ERROR:
      "로그인 유효기간이 만료되었거나 서버 에러 입니다. 로그인 화면으로 돌아갑니다.",
    CONFIRM_DELETE: "정말 삭제하시겠습니까?",
    CONFIRM_MODIFY: "정말 마감하시겠습니까?",
  },

  buttonName: {
    MODIFY: "수정",
  },

  defaultPosition: { lat: 37.4921180264813, lng: 127.0300023501 },

  placeHolderImageSrc:
    "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",

  colorMap: {
    FE: "primary",
    BE: "ultramarine",
    AI: "scarlet",
  },

  courseMap: {
    FE: "프론트엔드",
    BE: "백엔드",
    AI: "인공지능",
  },

  courses: [
    { value: "FE", label: "프론트엔드" },
    { value: "BE", label: "백엔드" },
  ],

  roles: [
    { value: "STUDENT", label: "수강생" },
    { value: "MANAGER", label: "매니저" },
    { value: "MENTOR", label: "멘토" },
  ],

  generations: [
    { value: "1", label: "1기" },
    { value: "2", label: "2기" },
    { value: "3", label: "3기" },
    { value: "4", label: "4기" },
    { value: "5", label: "5기" },
    { value: "6", label: "6기" },
    { value: "7", label: "7기" },
    { value: "8", label: "8기" },
    { value: "9", label: "9기" },
    { value: "10", label: "10기" },
  ],

  roleMap: {
    STUDENT: "수강생",
    MENTOR: "멘토",
    MANAGER: "매니저",
    ADMIN: "어드민",
  },

  commentStatus: {
    POSTED: "POSTED",
    DELETED: "DELETED",
  },

  userListInfinitePageCount: 19,

  validation: {
    COMMENT_MAX_LENGTH: 150,
    SUMMARY_MAX_LENGTH: 50,
  },
} as const;
