import { routes } from "../../constants";

export default [
  {
    name: "데둥이 소개",
    path: routes.USERLIST,
    shouldAuth: false,
  },
  {
    name: "데둥여지도",
    path: routes.USERSMAP,
    shouldAuth: false,
  },
  {
    name: "모집 게시판",
    path: routes.GATHERLIST,
    shouldAuth: false,
  },
  {
    name: "스터디",
    path: routes.GATHERLIST_STUDY,
    shouldAuth: false,
  },
  {
    name: "동아리",
    path: routes.GATHERLIST_CLUB,
    shouldAuth: false,
  },
  {
    name: "프로젝트",
    path: routes.GATHERLIST_PROJECT,
    shouldAuth: false,
  },
  {
    name: "맵각코",
    path: routes.MAPGAKCOLIST,
    shouldAuth: false,
  },
  {
    name: "관리자",
    path: routes.ADMIN,
    shouldAuth: true,
  },
];
