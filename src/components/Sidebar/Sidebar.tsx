import { useCallback } from "react";
import { Header, LogoText, MenuWrapper, SidebarWrapper } from "./styles";
import Logo from "../Logo/Logo";
import menuRoutes from "./menuRoutes";

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
          onClick={handleClick("/")}
        />
        <LogoText onClick={handleClick("/")}>Devnity</LogoText>
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
