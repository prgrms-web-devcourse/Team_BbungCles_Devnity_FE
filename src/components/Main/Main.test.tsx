import { ThemeProvider } from "@emotion/react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { MemoryRouter } from "react-router-dom";
import theme from "../../assets/theme";

import Main from "./Main";

describe("Main", () => {
  function renderMain() {
    return render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <Main />
        </ThemeProvider>
      </MemoryRouter>
    );
  }

  beforeEach(() => {
    renderMain();
  });

  it("메인을 보면, `자기소개`, `맵각코 요약`, `모집 게시판`의 내용을 볼 수 있다.", () => {
    expect(screen.queryByText("자기소개")).toBeInTheDocument();
    expect(screen.queryByText("맵각코 요약")).toBeInTheDocument();
    expect(screen.queryByText("모집 게시판")).toBeInTheDocument();
  });

  it("유저 프로필 이미지를 클릭하면, `프로필`, `내 모임 관리`, `로그아웃` 메뉴를 볼 수 있다.", () => {
    const profileImage = screen.getByAltText("유저 프로필 이미지");

    userEvent.click(profileImage);

    expect(screen.queryByText("프로필")).toBeVisible();
    expect(screen.queryByText("내 모임 관리")).toBeVisible();
    expect(screen.queryByText("로그아웃")).toBeVisible();
  });
});
