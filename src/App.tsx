import { ThemeProvider } from "@emotion/react";
import theme from "./assets/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};

export default App;
