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
    { name: "기수", value: `${userInfo.user.generation}기` },
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

      const regex = new RegExp(value.toString());

      // TODO: value와 일치하는 값이 여러 요소에 있을 수 있으므로 첫번째 값만 일치해도 통과하도록 만든다. 추후 각 요소에 test-id나 다른 attribute를 부여하는 방식 또는 더 나은 아이디어를 도입한다.
      expect(screen.queryAllByText(regex)[0]).toBeInTheDocument();
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
