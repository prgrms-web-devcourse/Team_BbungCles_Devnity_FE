import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import LikeButtonAndText from "./LikeButtonAndText";

describe("LikeButtonAndText", () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("`좋아요 버튼`을 볼 수 있다.", () => {
    render(
      <LikeButtonAndText isLiked={false} likeCount={16} onClick={handleClick} />
    );

    expect(screen.queryByRole("button", { name: "like" })).toBeInTheDocument();
  });

  it("`좋아요 개수`를 볼 수 있다.", () => {
    render(
      <LikeButtonAndText isLiked={false} likeCount={16} onClick={handleClick} />
    );

    expect(screen.queryByText(16)).toBeInTheDocument();
  });

  it("이미 좋아요 버튼을 눌렀을 때, 좋아요 버튼의 색상이 채워져 있다", () => {
    render(<LikeButtonAndText isLiked likeCount={16} onClick={handleClick} />);

    expect(screen.queryByTestId("filled")).toBeInTheDocument();
  });

  it("좋아요 버튼을 누르지 않았을 때, 좋아요 버튼의 색상이 비워져 있다", () => {
    render(
      <LikeButtonAndText isLiked={false} likeCount={16} onClick={handleClick} />
    );

    expect(screen.queryByTestId("empty")).toBeInTheDocument();
  });

  it("좋아요 버튼을 누르지 않은 상태에서 클릭하면, 좋아요 개수가 1만큼 증가한다", () => {
    render(
      <LikeButtonAndText isLiked={false} likeCount={16} onClick={handleClick} />
    );

    userEvent.click(screen.getByRole("button", { name: "like" }));

    expect(handleClick).toBeCalledTimes(1);
  });

  it("좋아요 버튼을 누른 상태에서 클릭하면, 좋아요 개수가 1만큼 감소한다", () => {
    render(<LikeButtonAndText isLiked likeCount={16} onClick={handleClick} />);

    userEvent.click(screen.getByRole("button", { name: "like" }));

    expect(handleClick).toBeCalledTimes(1);
  });
});
