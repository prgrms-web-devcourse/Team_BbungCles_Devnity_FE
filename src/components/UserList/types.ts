import { MouseEventHandler } from "react";

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

export interface IProps {
  users: User[];
  handleMoveDetailPage?: MouseEventHandler<HTMLDivElement>;
}
