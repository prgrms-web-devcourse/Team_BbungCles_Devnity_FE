import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import login from "../../utils/constants/login";
import LoginContainer from "./LoginContainer";

beforeEach(() => {
  render(
    <BrowserRouter>
      <LoginContainer />
    </BrowserRouter>
  );
});

afterEach(cleanup);

describe("로그인 컴포넌트 레이아웃", () => {
  it("Devnity 문구가 보여야 한다.", () => {
    const titleElement = screen.getByText(/Devnity/i) as HTMLHeadingElement;

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
    const loginButton = screen.getByRole("button", {
      name: "로그인",
    }) as HTMLButtonElement;

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

describe("로그인 컴포넌트 form 정합성 체크", () => {
  it(`사용자가 이메일을 입력하지 않고 로그인 버튼을 누르면 '${login.message.EMAIL_REQUIRED_VALIDATION}' 문구가 보여야 한다.`, async () => {
    const loginButton = screen.getByRole("button", { name: "로그인" });

    fireEvent.click(loginButton);

    const errorMessage = (await screen.findByText(
      login.message.EMAIL_REQUIRED_VALIDATION
    )) as HTMLParagraphElement;

    expect(errorMessage).toBeInTheDocument();
  });

  it(`사용자가 올바르지 않은 이메일 형식을 입력했을 경우 '${login.message.EMAIL_FORMAT_VALIDATION}' 문구가 보여야 한다.`, async () => {
    const emailElement = screen.getByPlaceholderText(
      "이메일"
    ) as HTMLInputElement;

    fireEvent.change(emailElement, {
      target: { value: "abc" },
    });
    fireEvent.blur(emailElement);

    const errorMessage = (await screen.findByText(
      login.message.EMAIL_FORMAT_VALIDATION
    )) as HTMLParagraphElement;

    expect(errorMessage).toBeInTheDocument();
  });

  it(`사용자가 올바른 형식의 이메일을 입력했을 경우 에러메세지가 보이지 않는다.`, async () => {
    const emailElement = screen.getByPlaceholderText(
      "이메일"
    ) as HTMLInputElement;

    await waitFor(() => {
      fireEvent.change(emailElement, {
        target: { value: "rkdvnfma90@gmail.com" },
      });
    });

    const errorMessage = screen.queryByText(
      login.message.EMAIL_FORMAT_VALIDATION
    ) as HTMLParagraphElement;

    expect(errorMessage).not.toBeInTheDocument();
  });

  it(`사용자가 비밀번호를 입력하지 않고 로그인 버튼을 누르면 '${login.message.PASSWORD_REQUIRED_VALIDATION}' 문구가 보여야 한다.`, async () => {
    const loginButton = screen.getByRole("button", { name: "로그인" });

    fireEvent.click(loginButton);

    const errorMessage = (await screen.findByText(
      login.message.PASSWORD_REQUIRED_VALIDATION
    )) as HTMLParagraphElement;

    expect(errorMessage).toBeInTheDocument();
  });
});
