import { ThemeProvider } from "@emotion/react";
import theme from "./assets/theme";
import Router from "./routes/Router";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
