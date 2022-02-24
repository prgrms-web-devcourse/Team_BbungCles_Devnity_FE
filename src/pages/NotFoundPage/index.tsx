import Lottie from "react-lottie";
import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useHistory } from "react-router-dom";
import animationData from "../../assets/lotties/404-error.json";
import { sidebarVisibleState } from "../../atoms/sidebarVisible";
import { Button, Container, LottieWrapper, NotFoundContainer } from "./styles";
import { routes } from "../../constants";

const NotFoundPage = () => {
  const history = useHistory();

  const [isShowSidebar, setShowSidebar] = useRecoilState(sidebarVisibleState);

  const handleClick = useCallback(() => {
    history.push(routes.MAIN);
  }, [history]);

  useEffect(() => {
    setShowSidebar(false);
  }, [isShowSidebar, setShowSidebar]);

  return (
    <Container>
      <NotFoundContainer>
        <LottieWrapper>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData,
              width: 100,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
          />
        </LottieWrapper>
        <Button type="button" onClick={handleClick}>
          홈으로 돌아가기
        </Button>
      </NotFoundContainer>
    </Container>
  );
};

export default NotFoundPage;
