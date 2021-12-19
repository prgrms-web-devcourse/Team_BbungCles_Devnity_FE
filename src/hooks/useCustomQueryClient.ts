import { useCallback } from "react";
import { MutationCache, QueryCache, QueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { useLocalStorage } from ".";
import { common, errorCode, login, routes } from "../constants";
import useCustomToast from "./useCustomToast";

const useCustomQueryClient = () => {
  const history = useHistory();

  const [toast] = useCustomToast();

  const [, setToken] = useLocalStorage(login.localStorageKey.TOKEN, "");

  // query, mutation의 에러처리 로직이 달라져야 한다면 분리 필요
  const onErrorHandler = useCallback(
    ({ response }) => {
      const errorMessage = response
        ? response.data.message
        : common.message.UNKNOWN_ERROR;

      if (
        response === undefined ||
        response?.status === errorCode.UNAUTHORIZED ||
        response?.status === errorCode.FORBIDDEN
      ) {
        setToken("");
        history.push(routes.LOGIN);
      } else if (response?.status === errorCode.NOT_FOUND) {
        history.goBack();
      }

      toast({ message: errorMessage });
    },
    [history, setToken, toast]
  );

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },

    queryCache: new QueryCache({
      onError: onErrorHandler,
    }),

    mutationCache: new MutationCache({
      onError: onErrorHandler,
    }),
  });

  return [queryClient];
};

export default useCustomQueryClient;
