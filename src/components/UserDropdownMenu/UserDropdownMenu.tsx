import { useCallback } from "react";
import menuRoutes from "./menuRoutes";
import { Container } from "./styles";

interface Props {
  isTriggered: boolean;
  onLinkClick: (link: string) => void;
}

const UserDropdownMenu = ({ isTriggered = false, onLinkClick }: Props) => {
  const handleClick = useCallback(
    (link) => (event: React.MouseEvent) => {
      event.preventDefault();
      onLinkClick(link);
    },
    [onLinkClick]
  );

  return (
    <Container isTriggered={isTriggered} data-testid="user-dropdown-menu">
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
    </Container>
  );
};

export default UserDropdownMenu;
