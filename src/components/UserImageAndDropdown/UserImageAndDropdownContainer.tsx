import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { login, routes } from "../../constants";
import { useLocalStorage } from "../../hooks";
import useToggle from "../../hooks/useToggle";
import UserImageAndDropdown from "./UserImageAndDropdown";

interface Props {
  imageUrl: string;
}

const UserImageAndDropdownContainer = ({ imageUrl }: Props) => {
  const history = useHistory();

  const [, setToken] = useLocalStorage(login.localStorageKey.TOKEN, "");

  const [isTriggered, toggle] = useToggle(false);

  const handleLinkClick = useCallback(
    (link) => {
      // TODO: 현재 /logout은 라우팅 목록에 존재하지 않는다. /logout이 라우팅으로 처리되면 상수화한다.
      if (link === "/logout") {
        setToken("");
        history.push(routes.LOGIN);
        return;
      }

      history.push(link);
    },
    [history, setToken]
  );

  return (
    <UserImageAndDropdown
      imageUrl={imageUrl}
      isTriggered={isTriggered}
      onImageClick={toggle}
      onLinkClick={handleLinkClick}
    />
  );
};

export default UserImageAndDropdownContainer;
