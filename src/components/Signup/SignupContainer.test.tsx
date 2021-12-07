import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import SignupContainer from "./SignupContainer";

const queryClient = new QueryClient();

beforeEach(() => {
  render(
    <QueryClientProvider client={queryClient}>
      <SignupContainer />
    </QueryClientProvider>
  );
});

describe("회원가입 페이지", () => {
  it("회원가입 문구가 보여야 한다.", () => {
    const titleElement = screen.getByRole("heading", {
      name: "회원가입",
      level: 1,
    });
    expect(titleElement).toBeInTheDocument();
  });

  it("이름 입력 폼이 보여야 한다.", () => {
    const nameElement = screen.getByPlaceholderText("이름") as HTMLInputElement;
    expect(nameElement).toBeInTheDocument();
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

  it("비밀번호 확인 입력 폼이 보여야 한다.", () => {
    const confirmPasswordElement = screen.getByPlaceholderText(
      "비밀번호 확인"
    ) as HTMLInputElement;
    expect(confirmPasswordElement).toBeInTheDocument();
  });

  it("코스를 선택할 수 있는 드랍다운폼이 보여야 한다.", () => {
    const course = screen.getByLabelText("코스");
    expect(course).toBeInTheDocument();
  });

  it("기수를 선택할 수 있는 드랍다운폼이 보여야 한다.", () => {
    const generation = screen.getByLabelText("기수");
    expect(generation).toBeInTheDocument();
  });

  it("역할을 선택할 수 있는 드랍다운폼이 보여야 한다.", () => {
    const role = screen.getByLabelText("역할");
    expect(role).toBeInTheDocument();
  });

  it("회원가입 버튼이 보여야 한다.", () => {
    const signupButton = screen.getByRole("button", { name: "회원가입" });
    expect(signupButton).toBeInTheDocument();
  });
});
