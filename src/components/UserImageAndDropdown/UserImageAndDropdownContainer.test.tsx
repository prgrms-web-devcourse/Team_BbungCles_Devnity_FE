import { ThemeProvider } from "@emotion/react";
import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import { MemoryRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import theme from "../../assets/theme";
import { routes } from "../../constants";

import { Unknown } from "../../types/commonTypes";

import UserImageAndDropdownContainer from "./UserImageAndDropdownContainer";

const mockPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual<Unknown>("react-router-dom"),
  useHistory() {
    return { push: mockPush };
  },
}));

describe("UserImageAndDropdownContainer", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    render(
      <RecoilRoot>
        <MemoryRouter>
          <ThemeProvider theme={theme}>
            <UserImageAndDropdownContainer imageUrl="" />
          </ThemeProvider>
        </MemoryRouter>
      </RecoilRoot>
    );
  });

  it("유저 프로필 이미지를 마우스 오버하면, `프로필`, `내 모임 관리`, `로그아웃` 메뉴를 볼 수 있다.", () => {
    const profileImage = screen.getByAltText("유저 프로필 이미지");
    userEvent.hover(profileImage);

    expect(screen.queryByText("프로필")).toBeVisible();
    expect(screen.queryByText("내 모임 관리")).toBeVisible();
    expect(screen.queryByText("로그아웃")).toBeVisible();
  });

  it("드랍다운 메뉴에서 프로필을 클릭하면, 자기소개 상세 조회 페이지로 이동한다", () => {
    const profileImage = screen.getByAltText("유저 프로필 이미지");
    userEvent.hover(profileImage);
    userEvent.click(screen.getByText("프로필"));

    expect(mockPush).toBeCalledWith(routes.MYPROFILE);
  });

  it("드랍다운 메뉴에서 내 모임 관리를 클릭하면, 내 모임 관리 페이지로 이동한다", () => {
    const profileImage = screen.getByAltText("유저 프로필 이미지");
    userEvent.hover(profileImage);
    userEvent.click(screen.getByText("내 모임 관리"));

    expect(mockPush).toBeCalledWith(routes.MYGATHERLIST);
  });

  it("드랍다운 메뉴에서 로그아웃을 클릭하면, 로그아웃이 되며 로그인 페이지로 이동한다", () => {
    const profileImage = screen.getByAltText("유저 프로필 이미지");
    userEvent.hover(profileImage);
    userEvent.click(screen.getByText("로그아웃"));

    // TODO: 로그아웃을 테스트하기 위해 useLocalStorage 훅 테스트를 하거나 localStorage.setItem spyOn으로 추적하여 테스트를 한다

    expect(mockPush).toBeCalledWith("/login");
  });
});
