interface SimpleUserInfo {
  userId: string;
  name: string;
  course: string;
  generation: number;
  profileImgUrl: string;
  role: string;
}

export interface Props {
  gatherData: {
    gatherId: number;
    category: string;
    title: string;
    hostName: string;
    hostProfile: string;
    hostCourse: string;
    hostGeneration: number;
    createdDate: string;
    deadLine: string;
    view: number;
    period: number;
    applicantLimit: number;
    applicantCount: number;
    applicants: Array<SimpleUserInfo>;
    content: string;
    comments?: [
      {
        commentId: number;
        content: string;
        createdAt: string;
        updatedAt: string;
        status: string;

        simpleUserInfo: {
          userId: string;
          name: string;
          course: string;
          generation: number;
          profileImgUrl: string;
          role: string;
        };

        children?: [
          {
            commentId: number;
            parent: number;
            content: string;
            createdAt: string;
            updatedAt: string;

            simpleUserInfo: SimpleUserInfo;
          }
        ];
      }
    ];
  };
  handleGatherDelete: (arg: number) => void;
  handleGatherClose: (arg: number) => void;
  handleGatherCancel: (arg1: number, arg2: string) => void;
  handleGatherApply: (arg1: number) => void;
  handleCommentSubmit: (arg: string) => void;
  handleCommentDelete: (arg: number) => void;
  handleCommentEdit: (arg: number) => void;
}
