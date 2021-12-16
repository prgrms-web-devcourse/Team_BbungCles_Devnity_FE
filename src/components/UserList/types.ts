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
  // TODO: infiniteQuery 관련 타입 어떻게 처리 할 지
  // eslint-disable-next-line
  pages: any;
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
  // TODO: infiniteQuery 관련 타입 어떻게 처리 할 지
  // eslint-disable-next-line
  hasNextPage: any;
  // TODO: infiniteQuery 관련 타입 어떻게 처리 할 지
  // eslint-disable-next-line
  fetchNextPage: any;
}
