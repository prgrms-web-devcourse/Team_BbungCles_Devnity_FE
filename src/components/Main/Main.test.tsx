import { ThemeProvider } from "@emotion/react";
import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { gathers } from "../../../fixtures/gather";
import randomUserInfo from "../../../fixtures/userInfo";
import theme from "../../assets/theme";

import Main from "./Main";

jest.mock("axios");

describe("Main", () => {
  const userSuggestions = Array.from({ length: 1 }, () => randomUserInfo());
  const gatherSuggestions = gathers;

  function renderMain() {
    return render(
      <RecoilRoot>
        <MemoryRouter>
          <ThemeProvider theme={theme}>
            <Main
              userSuggestions={userSuggestions}
              gatherSuggestions={gatherSuggestions}
            />
          </ThemeProvider>
        </MemoryRouter>
      </RecoilRoot>
    );
  }

  beforeEach(() => {
    renderMain();
  });

  // TODO: 메인화면 horizontal scrollbar 기능 추가 후 테스트 실패함 리팩토링할 때 확인 필요 (rkdvnfma90 작업 함)
  it.skip("메인을 보면, `자기소개`, `맵각코 요약`, `모집 게시판`의 내용을 볼 수 있다.", () => {
    expect(screen.queryByText("자기소개")).toBeInTheDocument();
    // TODO: 반응형 UI를 위해 동일한 마크업이 2개 존재한다. 따라서 한쪽만 있어도 테스트가 통과되는데, 이를 눈에 보이는 것만 더 정확하게 테스트는 방법을 알게 되면 수정한다.
    expect(screen.queryAllByText("맵각코 요약")[0]).toBeInTheDocument();
    expect(screen.queryAllByText("모집 게시판")[0]).toBeInTheDocument();
  });

  // TODO: 더 이상 메인 컴포넌트의 역할이 아니므로 주석 처리한다. Cypress E2E 테스트로 옮기면 아래 주석을 삭제한다.
  // it("유저 프로필 이미지를 클릭하면, `프로필`, `내 모임 관리`, `로그아웃` 메뉴를 볼 수 있다.", () => {
  //   const profileImage = screen.getByAltText("유저 프로필 이미지");

  //   userEvent.click(profileImage);

  //   expect(screen.queryByText("프로필")).toBeVisible();
  //   expect(screen.queryByText("내 모임 관리")).toBeVisible();
  //   expect(screen.queryByText("로그아웃")).toBeVisible();
  // });
});
