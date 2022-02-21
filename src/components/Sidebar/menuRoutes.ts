import { routes } from "../../constants";

export default [
  {
    name: "프로필",
    path: routes.MYPROFILE,
    shouldAuth: false,
    isChild: false,
  },
  {
    name: "데둥이 소개",
    path: routes.USERLIST,
    shouldAuth: false,
    isChild: false,
  },
  {
    name: "데둥여지도",
    path: routes.USERSMAP,
    shouldAuth: false,
    isChild: false,
  },
  {
    name: "모집 게시판",
    path: routes.GATHERLIST,
    shouldAuth: false,
    isChild: false,
  },
  {
    name: "스터디",
    path: routes.GATHERLIST_STUDY,
    shouldAuth: false,
    isChild: true,
  },
  {
    name: "동아리",
    path: routes.GATHERLIST_CLUB,
    shouldAuth: false,
    isChild: true,
  },
  {
    name: "프로젝트",
    path: routes.GATHERLIST_PROJECT,
    shouldAuth: false,
    isChild: true,
  },
  {
    name: "맵각코",
    path: routes.MAPGAKCOLIST,
    shouldAuth: false,
    isChild: false,
  },
  {
    name: "관리자",
    path: routes.ADMIN,
    shouldAuth: true,
    isChild: false,
  },
];
