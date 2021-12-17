import MyGather from "./MyGather";

export const dummy = [
  {
    status: "GATHERING",
    gatherId: 1,
    category: "PROJECT",
    title: "아침까지 달리는 프로젝트 모집한다구요",
    createdAt: "2021-12-04",
    deadline: "2021-12-11",
    applicantLimit: 8,
    applicantCount: 3,
    view: 67,
    isApplied: false,
    commentCount: 0,
    author: {
      userId: 1,
      name: "뿡조",
      course: "BE",
      generation: 2,
      profileImgUrl: "https://picsum.photos/200/400",
      role: "STUDENT",
    },
  },
  {
    status: "CLOSED",
    gatherId: 2,
    category: "STUDY",
    title: "백준 플래1에게 배우는 알고리즘 스터디 모집한다구요",
    createdAt: "2021-11-04",
    deadline: "2021-11-23",
    applicantLimit: 4,
    applicantCount: 4,
    isApplied: false,
    commentCount: 0,
    view: 5138,
    author: {
      name: "뿡찬",
      course: "FE",
      generation: 1,
      profileImgUrl: "https://picsum.photos/200/400",
      role: "STUDENT",
      userId: 7,
    },
  },
  {
    status: "GATHERING",
    gatherId: 3,
    category: "CLUB",
    title: "닭발 매니아 모집한다구요~~~",
    createdAt: "2021-10-04",
    deadline: "2021-10-23",
    applicantLimit: 15,
    applicantCount: 4,
    view: 32,
    isApplied: false,
    commentCount: 0,
    author: {
      name: "뿡민이",
      course: "BE",
      generation: 5,
      profileImgUrl: "https://picsum.photos/200/400",
      role: "STUDENT",
      userId: 2,
    },
  },
  {
    status: "GATHERING",
    gatherId: 4,
    category: "STUDY",
    title: "Git 스터디 모집한다구요~~~",
    createdAt: "2022-01-04",
    deadline: "2022-01-08",
    applicantLimit: 4,
    applicantCount: 2,
    view: 150,
    isApplied: false,
    commentCount: 0,
    author: {
      name: "뿡철이",
      course: "FE",
      generation: 5,
      profileImgUrl: "https://picsum.photos/200/400",
      role: "STUDENT",
      userId: 2,
    },
  },
  {
    status: "GATHERING",
    gatherId: 5,
    category: "CLUB",
    title: "해안도로 제주도 드라이브 투게더 모집한다구요~~~",
    createdAt: "2021-12-04",
    deadline: "2021-12-23",
    applicantLimit: 6,
    applicantCount: 6,
    view: 340,
    isApplied: false,
    commentCount: 0,
    author: {
      name: "뿡름이",
      course: "FE",
      generation: 5,
      profileImgUrl: "https://picsum.photos/200/400",
      role: "STUDENT",
      userId: 2,
    },
  },
  {
    status: "GATHERING",
    gatherId: 6,
    category: "CLUB",
    title: "건강 음료 시식회 모집한다구요~~~",
    createdAt: "2021-12-04",
    deadline: "2021-12-32",
    applicantLimit: 6,
    applicantCount: 0,
    view: 3,
    isApplied: false,
    commentCount: 0,
    author: {
      name: "뿡크",
      course: "BE",
      generation: 2,
      profileImgUrl: "https://picsum.photos/200/400",
      role: "STUDENT",
      userId: 2,
    },
  },
];

const MyGatherContainer = () => {
  // TODO : 내가 등록한 목록을 가져올 API호출 -> MyGather의 gatherData로 넘겨줄 값을 반환 (현재 dummy데이터로 처리)
  // GET /api/v1/users/me/host
  // 변수 이름: applyData

  // TODO : 내가 신청한 목록을 가져올 API호출
  // GET /api/v1/users/me/applicant
  // 변수 이름: registerData

  return <MyGather applyData={dummy} makeData={dummy} />;
};

export default MyGatherContainer;