interface SelectOption {
  value: string | number;
  label: string;
}

export const courses: SelectOption[] = [
  { value: "FE", label: "프론트엔드" },
  { value: "BE", label: "백엔드" },
  { value: "AI", label: "인공지능" },
];

export const generations: SelectOption[] = [
  { value: "1", label: "1기" },
  { value: "2", label: "2기" },
];

export const roles: SelectOption[] = [
  { value: "STUDENT", label: "수강생" },
  { value: "MANAGER", label: "매니저" },
  { value: "MENTOR", label: "멘토" },
];
