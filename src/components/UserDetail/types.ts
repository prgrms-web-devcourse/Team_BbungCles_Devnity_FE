interface ChildrenComment {
  commentId: number;
  parent: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  status: string;
  writer: {
    userId: number;
    name: string;
    course: string;
    generation: number;
    profileImgUrl: string | null;
    role: string;
  };
  children: null;
}

export interface Comment {
  commentId: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  status: string;

  writer: {
    userId: number;
    name: string;
    course: string;
    generation: number;
    profileImgUrl: string | null;
    role: string;
  };

  children: ChildrenComment[];
}

export interface UserDetailProps {
  userInfo: {
    user: {
      userId: number;
      email: string;
      name: string;
      course: string;
      generation: number;
      role: string;
      createdAt: string;
      updatedAt: string;
    };

    introduction: {
      introductionId: number;
      profileImgUrl: string | null;
      mbti: string | null;
      blogUrl: string | null;
      githubUrl: string | null;
      summary: string | null;
      latitude: number | null;
      longitude: number | null;
      createdAt: string;
      updatedAt: string;
      likeCount: number | null;
      description: string | null;
      isLike: boolean;
    };

    comments: Comment[];
  };

  isLoading: boolean;
}
