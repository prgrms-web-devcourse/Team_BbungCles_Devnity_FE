import "@emotion/react";

import { ITheme } from "../assets/theme";

declare module "@emotion/react" {
  export interface Theme extends ITheme {}
}
