import "@emotion/react";

import { ThemeType } from "../assets/theme";

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}
