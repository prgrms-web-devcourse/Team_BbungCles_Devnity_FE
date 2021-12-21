import { useCallback } from "react";
import Lottie from "react-lottie";
import { useRecoilValue } from "recoil";
import { useLocation } from "react-router-dom";
import animationData from "../../assets/lotties/christmas-dog.json";
import {
  Container,
  Header,
  TextWrapper,
  Nav,
  LottieWrapper,
  Footer,
} from "./styles";
import Text from "../base/Text";
import menuRoutes from "./menuRoutes";
import { routes } from "../../constants";
import SidebarIcon from "./SidebarIcon";
import { globalMyProfile } from "../../atoms";
import theme from "../../assets/theme";

interface Props {
  onLinkClick: (link: string) => void;
}

const Sidebar = ({ onLinkClick }: Props) => {
  const { pathname } = useLocation();

  const handleClick = useCallback(
    (link) => (event: React.MouseEvent | React.KeyboardEvent) => {
      event.preventDefault();
      onLinkClick(link);
    },
    [onLinkClick]
  );

  const myProfile = useRecoilValue(globalMyProfile);

  return (
    <Container>
      <Header>
        <TextWrapper onClick={handleClick(routes.MAIN)}>
          <img
            // TODO: 추후 webpack 설정 필요
            // eslint-disable-next-line
            src={require("../../assets/images/logo.png")}
            width="100%"
            height="80px"
            alt="main"
            style={{ width: "100%", objectFit: "contain" }}
          />
        </TextWrapper>
      </Header>
      <Nav>
        <ul>
          <li
            onClick={handleClick(routes.MAIN)}
            onKeyPress={handleClick(routes.MAIN)}
            role="presentation"
          >
            <div>
              <img
                // TODO: 추후 webpack 설정 필요
                // eslint-disable-next-line
                src={require("../../assets/images/small-logo.png")}
                width="100%"
                height="24px"
                alt="main"
                style={{ width: "100%", objectFit: "contain" }}
              />
            </div>
          </li>
          {menuRoutes
            .filter(({ shouldAuth }) => {
              if (shouldAuth && myProfile?.user.role !== "MANAGER") {
                return false;
              }

              return true;
            })
            .map(({ name, path, isChild }, index) => {
              const key = `${index}${name}`;

              return (
                <li
                  key={key}
                  onClick={handleClick(path)}
                  onKeyPress={handleClick(path)}
                  role="presentation"
                  title={name}
                  style={{
                    backgroundColor: path === pathname && theme.colors.gray100,
                  }}
                >
                  <div data-child={isChild}>
                    <SidebarIcon name={name} />
                    <Text>{name}</Text>
                  </div>
                </li>
              );
            })}
        </ul>
      </Nav>
      <Footer>
        <LottieWrapper>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
          />
        </LottieWrapper>
      </Footer>
    </Container>
  );
};

export default Sidebar;
