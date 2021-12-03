import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { MemoryRouter } from "react-router-dom";

import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  const handleLinkClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    render(
      <MemoryRouter>
        <Sidebar onLinkClick={handleLinkClick} />
      </MemoryRouter>
    );
  });

  it("사용자는 사이드바를 보면, 로고를 볼 수 있다.", () => {
    expect(screen.queryByAltText("로고")).not.toBeNull();
  });

  const menu = [
    "데둥이 소개",
    "데둥여지도",
    "모집게시판",
    "스터디",
    "동아리",
    "프로젝트",
    "맵각코",
  ];

  menu.forEach((menuItem) => {
    it(`사용자는 사이드바를 보면, ${menuItem} 메뉴를 볼 수 있다.`, () => {
      expect(screen.queryByText(menuItem)).not.toBeNull();
    });
  });

  it("사용자는 로고 클릭하면, 메인 페이지로 이동한다.", () => {
    const logo = screen.getByAltText("로고");

    userEvent.click(logo);

    expect(handleLinkClick).toBeCalledWith("/");
  });

  const menuRoutes = [
    {
      name: "데둥이 소개",
      path: "/userlist",
    },
    {
      name: "데둥여지도",
      path: "/usersmap",
    },
    {
      name: "모집게시판",
      path: "/gatherlist",
    },
    {
      name: "스터디",
      path: "/gatherlist?category=study",
    },
    {
      name: "동아리",
      path: "/gatherlist?category=club",
    },
    {
      name: "프로젝트",
      path: "/gatherlist?category=project",
    },
    {
      name: "맵각코",
      path: "/mapgakcolist",
    },
  ];

  menuRoutes.forEach(({ name, path }) => {
    it(`사용자는 ${name} 클릭하면, ${name}(으)로 이동한다`, () => {
      userEvent.click(screen.queryByText(name));

      expect(handleLinkClick).toBeCalledWith(path);
    });
  });
});
