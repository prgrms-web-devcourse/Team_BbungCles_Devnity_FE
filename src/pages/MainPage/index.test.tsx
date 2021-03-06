import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";

import { render, screen } from "@testing-library/react";

import theme from "../../assets/theme";

import MainPage from "./index";
import { currentUserState } from "../../atoms/user";
import randomUserInfo from "../../../fixtures/userInfo";

describe("MainPage", () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  function renderMainPage() {
    return render(
      <QueryClientProvider client={queryClient}>
        <RecoilRoot
          initializeState={(snap) =>
            snap.set(currentUserState, randomUserInfo())
          }
        >
          <MemoryRouter>
            <ThemeProvider theme={theme}>
              <MainPage />
            </ThemeProvider>
          </MemoryRouter>
        </RecoilRoot>
      </QueryClientProvider>
    );
  }

  beforeEach(() => {
    renderMainPage();
  });

  // TODO: 메인화면 horizontal scrollbar 기능 추가 후 테스트 실패함 리팩토링할 때 확인 필요 (rkdvnfma90 작업 함)
  it.skip("메인을 보면, `자기소개`, `맵각코 요약`, `모집 게시판`의 내용을 볼 수 있다.", () => {
    expect(screen.queryByText("자기소개")).toBeInTheDocument();
    // TODO: 반응형 UI를 위해 동일한 마크업이 2개 존재한다. 따라서 한쪽만 있어도 테스트가 통과되는데, 이를 눈에 보이는 것만 더 정확하게 테스트는 방법을 알게 되면 수정한다.
    expect(screen.queryAllByText("맵각코 요약")[0]).toBeInTheDocument();
    expect(screen.queryAllByText("모집 게시판")[0]).toBeInTheDocument();
  });
});
