import { ThemeProvider } from "@emotion/react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import theme from "../../assets/theme";

import UserDropdownMenu from "./UserDropdownMenu";

describe("UserDropdownMenu", () => {
  const handleClick = jest.fn();

  function renderUserDropdownMenu({ isTriggered = false }) {
    return render(
      <ThemeProvider theme={theme}>
        <UserDropdownMenu isTriggered={isTriggered} onLinkClick={handleClick} />
      </ThemeProvider>
    );
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("드랍다운 메뉴가 트리거 되면, 프로필, 내 모임 관리, 로그아웃 메뉴를 볼 수 있다.", () => {
    renderUserDropdownMenu({ isTriggered: true });

    expect(screen.queryByText("프로필")).toBeVisible();
    expect(screen.queryByText("내 모임 관리")).toBeVisible();
    expect(screen.queryByText("로그아웃")).toBeVisible();
  });

  it("드랍다운 메뉴가 트리거 되지 않으면, 프로필, 내 모임 관리, 로그아웃 메뉴를 볼 수 없다.", () => {
    renderUserDropdownMenu({ isTriggered: false });

    expect(screen.getByTestId("user-dropdown-menu")).toHaveStyle(
      "max-height: 0"
    );
  });

  it("드랍다운 메뉴에서 프로필을 클릭하면, 자기소개 상세 조회 페이지로 이동한다", () => {
    renderUserDropdownMenu({ isTriggered: true });

    userEvent.click(screen.getByText("프로필"));

    expect(handleClick).toBeCalledWith("/myprofile");
  });

  it("드랍다운 메뉴에서 내 모임 관리를 클릭하면, 내 모임 관리 페이지로 이동한다", () => {
    renderUserDropdownMenu({ isTriggered: true });

    userEvent.click(screen.getByText("내 모임 관리"));

    expect(handleClick).toBeCalledWith("/mygatherlist");
  });

  it("드랍다운 메뉴에서 로그아웃을 클릭하면, 로그아웃이 되며 로그인 페이지로 이동한다", () => {
    renderUserDropdownMenu({ isTriggered: true });

    userEvent.click(screen.getByText("로그아웃"));

    expect(handleClick).toBeCalledWith("/logout");
  });
});
