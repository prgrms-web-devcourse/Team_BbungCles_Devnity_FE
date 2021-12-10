import { useCallback } from "react";
import { Header, MenuWrapper, SidebarWrapper, TextWrapper } from "./styles";
import Logo from "../Logo/Logo";
import Text from "../base/Text";
import menuRoutes from "./menuRoutes";
import { routes } from "../../constants";

interface Props {
  onLinkClick: (link: string) => void;
}

const Sidebar = ({ onLinkClick }: Props) => {
  const handleClick = useCallback(
    (link) => (event: React.MouseEvent) => {
      event.preventDefault();
      onLinkClick(link);
    },
    [onLinkClick]
  );

  return (
    <SidebarWrapper>
      <Header>
        <Logo
          width={32}
          height={32}
          borderRadius="4px"
          imageUrl="https://source.unsplash.com/100x100"
          onClick={handleClick(routes.MAIN)}
        />
        <TextWrapper onClick={handleClick(routes.MAIN)}>
          <Text size={32} strong>
            Devnity
          </Text>
        </TextWrapper>
      </Header>
      <MenuWrapper>
        <ul>
          {menuRoutes.map(({ name, path }, index) => {
            const key = `${index}${name}`;

            return (
              <li key={key}>
                <a href={path} onClick={handleClick(path)}>
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
      </MenuWrapper>
    </SidebarWrapper>
  );
};

export default Sidebar;
