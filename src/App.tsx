import { ThemeProvider } from "@emotion/react";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";
import Router from "./routes/Router";
import DefaultTemplate from "./template/DefaultTemplate";
import theme from "./assets/theme";
import useCustomQueryClient from "./hooks/useCustomQueryClient";

const App = () => {
  const [queryClient] = useCustomQueryClient();

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <DefaultTemplate>
            <Router />
          </DefaultTemplate>
        </RecoilRoot>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
