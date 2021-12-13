import { ThemeProvider } from "@emotion/react";
import { QueryClientProvider, QueryClient } from "react-query";
import { RecoilRoot } from "recoil";
import theme from "./assets/theme";
import Router from "./routes/Router";
import DefaultTemplate from "./template/DefaultTemplate";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <DefaultTemplate>
            <Router />
          </DefaultTemplate>
        </RecoilRoot>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
