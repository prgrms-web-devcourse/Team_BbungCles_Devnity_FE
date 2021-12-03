import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";

import MainPage from "./index";

describe("MainPage", () => {
  function renderMainPage() {
    return render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );
  }

  beforeEach(() => {
    renderMainPage();
  });

  it("메인을 보면, `자기소개`, `맵각코 요약`, `모집게시판`의 내용을 볼 수 있다.", () => {
    expect(screen.queryByText("자기소개")).toBeInTheDocument();
    expect(screen.queryByText("맵각코 요약")).toBeInTheDocument();
    expect(screen.queryByText("모집게시판")).toBeInTheDocument();
  });
});
