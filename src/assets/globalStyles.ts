import { css } from "@emotion/react";

const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #app {
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;

export default globalStyles;
