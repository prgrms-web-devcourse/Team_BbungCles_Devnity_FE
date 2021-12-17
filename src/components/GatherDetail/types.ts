import { Gather } from "../../types/gather";
import { SubmitProps } from "../CommentForm/CommentForm";

export interface DeleteCommentProps {
  gatherId: number;
  commentId: number;
}

export interface EditommentProps {
  gatherId: number;
  commentId: number;
  content: string;
}

export interface EditGatherProps {
  gatherId: number;
  title: string;
  content: string;
  deadline: string;
  category: string;
}

export interface Props {
  gatherData: Gather;
  handleGatherDelete: (arg: number) => void;
  handleGatherClose: (arg: number) => void;
  handleGatherCancel: (arg1: number) => void;
  handleGatherApply: (arg1: number) => void;
  handleCommentSubmit: (arg: SubmitProps) => void;
  handleCommentDelete: (arg: DeleteCommentProps) => void;
  handleCommentEdit: (arg: EditommentProps) => void;
  handleGatherDetailEdit: (arg: EditGatherProps) => void;
}
