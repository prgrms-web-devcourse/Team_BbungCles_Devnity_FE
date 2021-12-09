import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../constants";
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
      // TODO: 라우팅 경로도 상수로 관리하는 게 나을 것 같다. 팀원들과 논의 후에 결정한다.
      if (link === "/logout") {
        setToken("");
        history.push("/login");
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
