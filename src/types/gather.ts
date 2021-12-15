export interface Gather {
  status: string;
  gatherId: number;
  category: "CLUB" | "PROJECT" | "STUDY";
  title: string;
  createdDate: string;
  deadLine: string;
  applicantLimit: number;
  applicantCount: number;
  view: number;
  name: string;
  course: string;
  generation: number;
  profileImgUrl: string;
}
