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
    // TODO: 반응형 UI를 위해 동일한 마크업이 2개 존재한다. 따라서 한쪽만 있어도 테스트가 통과되는데, 이를 눈에 보이는 것만 더 정확하게 테스트는 방법을 알게 되면 수정한다.
    expect(screen.queryAllByText("맵각코 요약")[0]).toBeInTheDocument();
    expect(screen.queryAllByText("모집 게시판")[0]).toBeInTheDocument();
  });

  it("유저 프로필 이미지를 클릭하면, `프로필`, `내 모임 관리`, `로그아웃` 메뉴를 볼 수 있다.", () => {
    const profileImage = screen.getByAltText("유저 프로필 이미지");

    userEvent.click(profileImage);

    expect(screen.queryByText("프로필")).toBeVisible();
    expect(screen.queryByText("내 모임 관리")).toBeVisible();
    expect(screen.queryByText("로그아웃")).toBeVisible();
  });
});
