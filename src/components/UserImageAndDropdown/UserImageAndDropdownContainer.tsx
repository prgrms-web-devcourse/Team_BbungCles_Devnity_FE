import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { globalMyProfile } from "../../atoms";
import { login, routes } from "../../constants";
import { useLocalStorage } from "../../hooks";
import UserImageAndDropdown from "./UserImageAndDropdown";

interface Props {
  imageUrl: string;
}

const UserImageAndDropdownContainer = ({ imageUrl }: Props) => {
  const history = useHistory();

  const [, setToken] = useLocalStorage(login.localStorageKey.TOKEN, "");

  const [, setGlobalMyProfile] = useRecoilState(globalMyProfile);

  const handleLinkClick = useCallback(
    (link) => {
      // TODO: 현재 /logout은 라우팅 목록에 존재하지 않는다. /logout이 라우팅으로 처리되면 상수화한다.
      if (link === "/logout") {
        setToken("");
        setGlobalMyProfile(null);
        history.push(routes.LOGIN);
        return;
      }

      history.push(link);
    },
    [history, setToken, setGlobalMyProfile]
  );

  return (
    <UserImageAndDropdown imageUrl={imageUrl} onLinkClick={handleLinkClick} />
  );
};

export default UserImageAndDropdownContainer;
