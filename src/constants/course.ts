const course = {
  FE: "프론트",
  BE: "백엔드",
  AI: "인공지능",
};

export default course;
export type CourseKeyType = keyof typeof course;
