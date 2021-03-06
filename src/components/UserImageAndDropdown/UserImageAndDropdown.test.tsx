import { ThemeProvider } from "@emotion/react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import theme from "../../assets/theme";

import UserImageAndDropdown from "./UserImageAndDropdown";

describe("UserImageAndDropdown", () => {
  const handleLinkClick = jest.fn();

  function renderUserImageAndDropdown() {
    return render(
      <ThemeProvider theme={theme}>
        <UserImageAndDropdown imageUrl="" onLinkClick={handleLinkClick} />
      </ThemeProvider>
    );
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("유저 프로필 이미지를 마우스 오버하면, `프로필`, `내 모임 관리`, `로그아웃` 메뉴를 볼 수 있다.", () => {
    renderUserImageAndDropdown();

    const profileImage = screen.getByAltText("유저 프로필 이미지");
    userEvent.hover(profileImage);

    expect(screen.queryByText("프로필")).toBeVisible();
    expect(screen.queryByText("내 모임 관리")).toBeVisible();
    expect(screen.queryByText("로그아웃")).toBeVisible();
  });

  it("드랍다운 메뉴에서 프로필을 마우스 오버하면, 자기소개 상세 조회 페이지로 이동한다", () => {
    renderUserImageAndDropdown();

    const profileImage = screen.getByAltText("유저 프로필 이미지");
    userEvent.hover(profileImage);
    userEvent.click(screen.getByText("프로필"));

    expect(handleLinkClick).toBeCalledWith("/myprofile");
  });

  it("드랍다운 메뉴에서 내 모임 관리를 마우스 오버하면, 내 모임 관리 페이지로 이동한다", () => {
    renderUserImageAndDropdown();

    const profileImage = screen.getByAltText("유저 프로필 이미지");
    userEvent.hover(profileImage);
    userEvent.click(screen.getByText("내 모임 관리"));

    expect(handleLinkClick).toBeCalledWith("/mygatherlist");
  });

  it("드랍다운 메뉴에서 로그아웃을 마우스 오버하면, 로그아웃이 되며 로그인 페이지로 이동한다", () => {
    renderUserImageAndDropdown();

    const profileImage = screen.getByAltText("유저 프로필 이미지");
    userEvent.hover(profileImage);
    userEvent.click(screen.getByText("로그아웃"));

    expect(handleLinkClick).toBeCalledWith("/logout");
  });
});
