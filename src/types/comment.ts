import { SimpleUserInfo } from "./simpleUserInfo";

export interface Comment {
  commentId: number;
  parentId?: number;
  content: string;
  createdAt: string;
  modifiedAt?: string;
  status: string;
  author: SimpleUserInfo;
  children?: Array<Comment>;
}
