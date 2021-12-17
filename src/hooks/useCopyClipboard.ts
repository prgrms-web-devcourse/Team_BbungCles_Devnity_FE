import { useCallback } from "react";

const useCopyClipboard = (): [typeof handleCopyClick] => {
  const handleCopyClick = useCallback((text: string) => {
    return () => {
      navigator.clipboard.writeText(text);
    };
  }, []);

  return [handleCopyClick];
};

export default useCopyClipboard;
