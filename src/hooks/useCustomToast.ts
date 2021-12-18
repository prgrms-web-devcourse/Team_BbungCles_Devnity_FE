import { useCallback } from "react";
import { toast } from "react-toastify";

interface IProps {
  message: string;
  autoClose?: number;
  position?:
    | "top-left"
    | "top-right"
    | "top-center"
    | "bottom-left"
    | "bottom-right"
    | "bottom-center";
  closeOnClick?: boolean;
  hideProgressBar?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  pauseOnFocusLoss?: boolean;
}

const useCustomToast = () => {
  const customToast = useCallback(
    ({
      message,
      autoClose = 2000,
      position = "top-center",
      hideProgressBar = false,
      pauseOnHover = false,
      draggable = true,
      closeOnClick = true,
      pauseOnFocusLoss = true,
    }: IProps) => {
      toast(message, {
        autoClose,
        position,
        hideProgressBar,
        pauseOnHover,
        draggable,
        closeOnClick,
        pauseOnFocusLoss,
      });
    },
    []
  );

  return [customToast];
};

export default useCustomToast;
