import { useCallback } from "react";
import useCustomToast from "./useCustomToast";

const useCopyClipboard = (): [typeof handleCopyClick] => {
  const [toast] = useCustomToast();

  const handleCopyClick = useCallback(
    (text: string) => {
      return () => {
        toast({ message: "링크가 복사되었습니다 😄" });
        navigator.clipboard.writeText(text);
      };
    },
    [toast]
  );

  return [handleCopyClick];
};

export default useCopyClipboard;
