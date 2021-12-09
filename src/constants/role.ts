const role = {
  STUDENT: "수강생",
  MANAGER: "매니저",
  MENTOR: "멘토",
};

export default role;
export type RoleKeyType = keyof typeof role;
