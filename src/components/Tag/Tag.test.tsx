import { ThemeProvider } from "@emotion/react";
import { render, screen } from "@testing-library/react";

import theme from "../../assets/theme";

import Tag from "./Tag";

describe("Tag", () => {
  function renderTag({ name, value }) {
    render(
      <ThemeProvider theme={theme}>
        <Tag name={name} value={value} />
      </ThemeProvider>
    );
  }

  it("태그의 이름별로 값이 동일하면 테마에 정해진 동일한 배경 색상을 렌더링한다", () => {
    const { name, value } = { name: "role", value: "MANAGER" };

    renderTag({ name, value });

    const tag = screen.getByTestId("tag-container");

    expect(tag).toHaveStyle(`background-color: ${theme.colors[name][value]}`);
  });
});
