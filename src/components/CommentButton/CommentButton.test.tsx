import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CommentButton from "./CommentButton";

describe("CommentButton", () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("`댓글 버튼`을 볼 수 있다.", () => {
    render(<CommentButton onClick={handleClick} />);

    expect(
      screen.queryByRole("button", { name: "comment" })
    ).toBeInTheDocument();
  });

  it("`댓글 개수`를 볼 수 있다.", () => {
    render(<CommentButton onClick={handleClick} />);

    expect(screen.queryByTestId("filled")).toBeInTheDocument();
  });

  it("댓글 버튼을 누르면, 해당 게시물의 상세 페이지로 이동한다", () => {
    render(<CommentButton onClick={handleClick} />);

    userEvent.click(screen.getByRole("button", { name: "comment" }));

    expect(handleClick).toBeCalledTimes(1);
  });
});
