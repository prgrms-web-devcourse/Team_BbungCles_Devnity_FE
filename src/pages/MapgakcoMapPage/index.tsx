import { useSetRecoilState } from "recoil";
import { sidebarVisibleState } from "../../atoms/sidebarVisible";
import { topbarVisibleState } from "../../atoms/topbarVisble";
import MapgakcoMapContainer from "../../components/MapgakcoMap/MapgakcoMapContainer";

const MapgakCoMapPage = () => {
  const setShowTopbar = useSetRecoilState(topbarVisibleState);
  const setShowSidebar = useSetRecoilState(sidebarVisibleState);

  setShowSidebar(true);
  setShowTopbar(false);

  return <MapgakcoMapContainer />;
};

export default MapgakCoMapPage;
