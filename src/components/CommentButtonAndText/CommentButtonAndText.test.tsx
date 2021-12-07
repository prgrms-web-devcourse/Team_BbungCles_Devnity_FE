import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CommentButtonAndText from "./CommentButtonAndText";

describe("CommentButtonAndText", () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("`댓글 버튼`을 볼 수 있다.", () => {
    render(<CommentButtonAndText commentCount={16} onClick={handleClick} />);

    expect(
      screen.queryByRole("button", { name: "comment" })
    ).toBeInTheDocument();
  });

  it("`댓글 개수`를 볼 수 있다.", () => {
    render(<CommentButtonAndText commentCount={16} onClick={handleClick} />);

    expect(screen.queryByText(16)).toBeInTheDocument();
  });

  it("댓글 버튼을 누르면, 해당 게시물의 상세 페이지로 이동한다", () => {
    render(<CommentButtonAndText commentCount={16} onClick={handleClick} />);

    userEvent.click(screen.getByRole("button", { name: "comment" }));

    expect(handleClick).toBeCalledTimes(1);
  });
});
