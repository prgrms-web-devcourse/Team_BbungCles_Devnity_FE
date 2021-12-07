import { ThemeProvider } from "@emotion/react";
import theme from "./assets/theme";
import Router from "./routes/Router";
import DefaultTemplate from "./template/DefaultTemplate";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <DefaultTemplate>
        <Router />
      </DefaultTemplate>
    </ThemeProvider>
  );
};

export default App;
