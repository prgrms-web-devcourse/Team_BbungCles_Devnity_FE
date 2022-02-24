import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { sidebarVisibleState } from "../../atoms/sidebarVisible";
import { topbarVisibleState } from "../../atoms/topbarVisble";
import MapgakcoMapContainer from "../../components/MapgakcoMap/MapgakcoMapContainer";

const MapgakCoMapPage = () => {
  const [isShowSidebar, setShowSidebar] = useRecoilState(sidebarVisibleState);
  const setShowTopbar = useSetRecoilState(topbarVisibleState);

  useEffect(() => {
    setShowSidebar(true);
    setShowTopbar(false);
  }, [isShowSidebar, setShowSidebar, setShowTopbar]);

  return <MapgakcoMapContainer />;
};

export default MapgakCoMapPage;
