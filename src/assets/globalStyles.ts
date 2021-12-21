import { css } from "@emotion/react";

const globalStyles = css`
  * {
    box-sizing: border-box;
    font-family: "Spoqa Han Sans Neo", "Spoqa Han Sans JP", sans-serif !important;
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

  .react-datepicker-popper {
    z-index: 9999 !important;
  }
`;

export default globalStyles;
