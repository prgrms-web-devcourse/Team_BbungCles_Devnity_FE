export interface User {
  user: {
    userId: number;
    name: string;
    course: string;
    generation: number;
    role: string;
  };

  introduction: {
    introductionId: number;
    profileImgUrl: string | null;
    mbti: string | null;
    summary: string | null;
    likeCount: number;
    commentCount: number;
  };
}

export interface Contents {
  values: User[];
  nextLastId: number;
}

export interface Filters {
  name: string | null;
  course: string | null;
  generation: string | null;
  role: string | null;
  nextLastId: number | null;
  size: number | null;
}

export interface IProps {
  users: Contents;
  setFilters: React.Dispatch<
    React.SetStateAction<{
      name: string | null;
      course: string | null;
      generation: string | null;
      role: string | null;
      nextLastId: number | null;
      size: number | null;
    }>
  >;
  isLoading: boolean;
}
