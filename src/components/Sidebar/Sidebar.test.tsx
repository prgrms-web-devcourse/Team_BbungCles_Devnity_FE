import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { MemoryRouter } from "react-router-dom";

import { ThemeProvider } from "@emotion/react";
import { RecoilRoot } from "recoil";
import Sidebar from "./Sidebar";

// import menuRoutes from "./menuRoutes";
import theme from "../../assets/theme";

jest.mock("react-lottie");
jest.requireActual("react-lottie");

describe("Sidebar", () => {
  const handleLinkClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <RecoilRoot>
            <Sidebar onLinkClick={handleLinkClick} />
          </RecoilRoot>
        </ThemeProvider>
      </MemoryRouter>
    );
  });

  it("사용자는 사이드바를 보면, 로고를 볼 수 있다.", () => {
    expect(screen.queryAllByAltText("로고")[0]).not.toBeNull();
  });

  const menu = [
    "데둥이 소개",
    "데둥여지도",
    "모집 게시판",
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
    const logo = screen.getAllByAltText("로고")[0];

    userEvent.click(logo);

    expect(handleLinkClick).toBeCalledWith("/");
  });

  // TODO: 추후 테스트 성공 처리 해야 함 (rkdvnfma90이 관련 작업 했음)
  // menuRoutes.forEach(({ name, path }) => {
  //   it(`사용자는 ${name} 클릭하면, ${name}(으)로 이동한다`, () => {
  //     userEvent.click(screen.queryByText(name));

  //     expect(handleLinkClick).toBeCalledWith(path);
  //   });
  // });
});
