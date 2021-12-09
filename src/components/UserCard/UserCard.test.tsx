import { ThemeProvider } from "@emotion/react";
import { render, screen } from "@testing-library/react";

import randomUserInfo from "../../../fixtures/userInfo";
import theme from "../../assets/theme";
import { tagMap } from "../../constants";

import UserCard from "./UserCard";

describe("UserCard", () => {
  const handleClick = jest.fn();

  const userInfo = randomUserInfo();

  beforeEach(() => {
    jest.clearAllMocks();

    render(
      <ThemeProvider theme={theme}>
        <UserCard userInfo={userInfo} onClick={handleClick} />
      </ThemeProvider>
    );
  });

  const elements = [
    { name: "이름", value: userInfo.user.name },
    { name: "코스", value: userInfo.user.course },
    { name: "기수", value: userInfo.user.generation },
    { name: "역할", value: tagMap.role[userInfo.user.role] },
    { name: "MBTI", value: tagMap.mbti[userInfo.introduction.mbti] },
    { name: "한줄소개", value: userInfo.introduction.summary },
    { name: "섬네일", value: userInfo.introduction.profileImgUrl },
    { name: "좋아요 개수", value: userInfo.introduction.likeCount },
    { name: "댓글 개수", value: userInfo.introduction.commentCount },
  ];

  elements.forEach(({ name, value }) => {
    it(`${name}을 볼 수 있다`, () => {
      if (name === "섬네일") {
        const thumbnail = screen.queryByAltText(
          "유저 섬네일 이미지"
        ) as HTMLImageElement;

        expect(thumbnail).toHaveAttribute("src", value);
        return;
      }

      expect(screen.queryByText(value, { exact: false })).toBeInTheDocument();
    });
  });

  it("좋아요 버튼을 볼 수 있다", () => {
    expect(screen.queryByRole("button", { name: "like" })).toBeInTheDocument();
  });

  it("댓글 버튼을 볼 수 있다", () => {
    expect(
      screen.queryByRole("button", { name: "comment" })
    ).toBeInTheDocument();
  });
});
