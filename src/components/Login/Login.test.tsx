import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";

beforeEach(() => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
});

describe("로그인 Presenter 컴포넌트", () => {
  it("Devnity 문구가 보여야 한다.", () => {
    const titleElement = screen.getByText(/Devnity/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("이메일 입력 폼이 보여야 한다.", () => {
    const emailElement = screen.getByPlaceholderText(
      "이메일"
    ) as HTMLInputElement;
    expect(emailElement).toBeInTheDocument();
  });

  it("비밀번호 입력 폼이 보여야 한다.", () => {
    const passwordElement = screen.getByPlaceholderText(
      "비밀번호"
    ) as HTMLInputElement;
    expect(passwordElement).toBeInTheDocument();
  });

  it("로그인 버튼이 보여야 한다.", () => {
    const loginButton = screen.getByRole("button", { name: "로그인" });
    expect(loginButton).toBeInTheDocument();
  });

  it("회원가입 링크는 /signup 이어야 한다.", () => {
    const signupLink = screen.getByRole("link", {
      name: "회원가입",
    }) as HTMLAnchorElement;

    expect(signupLink).toHaveAttribute("href", "/signup");
  });

  it("비밀번호 찾기 링크는 /findpassword 이어야 한다.", () => {
    const findPasswordLink = screen.getByRole("link", {
      name: "비밀번호를 잊으셨나요?",
    }) as HTMLAnchorElement;

    expect(findPasswordLink).toHaveAttribute("href", "/findpassword");
  });
});
