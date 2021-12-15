import { useCallback } from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/christmas-dog.json";
import {
  Container,
  Header,
  TextWrapper,
  Nav,
  LottieWrapper,
  Footer,
} from "./styles";
import Logo from "../Logo/Logo";
import Text from "../base/Text";
import menuRoutes from "./menuRoutes";
import { routes } from "../../constants";
import SidebarIcon from "./SidebarIcon";

interface Props {
  onLinkClick: (link: string) => void;
}

const Sidebar = ({ onLinkClick }: Props) => {
  const handleClick = useCallback(
    (link) => (event: React.MouseEvent | React.KeyboardEvent) => {
      event.preventDefault();
      onLinkClick(link);
    },
    [onLinkClick]
  );

  return (
    <Container>
      <Header>
        <Logo
          width={36}
          height={36}
          borderRadius="4px"
          imageUrl="https://source.unsplash.com/100x100"
          onClick={handleClick(routes.MAIN)}
        />
        <TextWrapper onClick={handleClick(routes.MAIN)}>
          <Text size={24} strong>
            Devnity
          </Text>
        </TextWrapper>
      </Header>
      <Nav>
        <ul>
          <li>
            <div>
              <Logo
                width={24}
                height={24}
                borderRadius="4px"
                imageUrl="https://source.unsplash.com/100x100"
                onClick={handleClick(routes.MAIN)}
              />
            </div>
          </li>
          {menuRoutes.map(({ name, path }, index) => {
            const key = `${index}${name}`;

            return (
              <li
                key={key}
                onClick={handleClick(path)}
                onKeyPress={handleClick(path)}
                role="presentation"
              >
                <div>
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
