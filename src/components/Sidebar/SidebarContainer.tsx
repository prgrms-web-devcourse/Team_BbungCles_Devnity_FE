import { useCallback } from "react";

import { useHistory } from "react-router-dom";

import Sidebar from "./Sidebar";

const SidebarContainer = () => {
  const history = useHistory();

  const handleLinkClick = useCallback(
    (link) => {
      history.push(link);
    },
    [history]
  );

  return <Sidebar onLinkClick={handleLinkClick} />;
};

export default SidebarContainer;
