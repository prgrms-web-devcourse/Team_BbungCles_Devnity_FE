import { useEffect, useMemo, ReactChild, CSSProperties } from "react";
import ReactDOM from "react-dom";
import Button from "../OldButton";
import {
  BackgroundDim,
  ButtonWrapper,
  ContentContainer,
  ModalContainer,
} from "./styles";

export interface Props {
  children: ReactChild;
  width?: number | string;
  height?: number | string;
  visible?: boolean;
  modalContainerStyles?: CSSProperties;
  contentContainerStyles?: CSSProperties;
  onClose?: () => void;
}

const Modal = ({
  children,
  width = 500,
  height,
  visible = false,
  modalContainerStyles = {},
  contentContainerStyles = {},
  onClose,
}: Props) => {
  const containerStyle = useMemo(
    () => ({
      width,
      height,
      ...modalContainerStyles,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [width, height]
  );

  const el = useMemo(() => document.createElement("div"), []);
  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el); // 모달 컴포넌트가 사라질 때
    };
  });

  return ReactDOM.createPortal(
    <BackgroundDim visible={visible}>
      <ModalContainer style={{ ...containerStyle }}>
        <ContentContainer style={{ ...contentContainerStyles }}>
          <ButtonWrapper>
            {onClose && (
              <Button onClick={onClose} style={{ display: "none" }}>
                ❌
              </Button>
            )}
          </ButtonWrapper>
          {children}
        </ContentContainer>
      </ModalContainer>
    </BackgroundDim>,
    el
  );
};

export default Modal;
