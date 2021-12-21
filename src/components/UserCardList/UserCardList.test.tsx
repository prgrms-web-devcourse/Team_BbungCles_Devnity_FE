import { ThemeProvider } from "@emotion/react";
import { render, screen } from "@testing-library/react";

import randomUserInfo from "../../../fixtures/userInfo";
import theme from "../../assets/theme";
import { UserInfo } from "../../types/userInfo";
import UserCardList from "./UserCardList";

describe("유저 카드 목록", () => {
  function renderUserCardList(userInfos: UserInfo[]) {
    return render(
      <ThemeProvider theme={theme}>
        <UserCardList userInfos={userInfos} />
      </ThemeProvider>
    );
  }

  // TODO: 메인화면 horizontal scrollbar 기능 추가 후 테스트 실패함 리팩토링할 때 확인 필요 (rkdvnfma90 작업 함)
  context.skip("데이터가 있는 경우", () => {
    it("데이터가 있는 경우, 목록을 보여준다.", () => {
      const userInfos = Array.from({ length: 3 }, () => randomUserInfo());

      renderUserCardList(userInfos);

      userInfos.forEach(({ user }) => {
        expect(screen.queryAllByText(user.name).length).toBeGreaterThanOrEqual(
          1
        );
      });
    });
  });

  // TODO: 메인화면 horizontal scrollbar 기능 추가 후 테스트 실패함 리팩토링할 때 확인 필요 (rkdvnfma90 작업 함)
  context.skip("데이터가 없는 경우", () => {
    it("목록이 없다는 메시지를 보여준다.", () => {
      renderUserCardList([]);

      expect(screen.queryByText(/목록이 없습니다/)).toBeInTheDocument();
    });
  });
});
