import { useState } from "react";
import { useRecoilValue } from "recoil";
import useClickAway from "../../../hooks/useClickAway";
import { Container } from "./styles";
import useMapgakcoDetailQuery from "../../../hooks/useMapgakcoDetailQuery";
import { globalMyProfile } from "../../../atoms";
import MapgakcoDetailOnEdit from "./MapgakcoDetailOnEdit";
import MapgakcoDetailOnView from "./MapgakcoDetailOnView";

interface Props {
  mapgakcoId: string;
  onModalClose: () => void;
}

const MapgakcoDetailContainer = ({ mapgakcoId, onModalClose }: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  const ref = useClickAway(() => {
    onModalClose();
  });

  const myProfile = useRecoilValue(globalMyProfile);

  const { isLoading, data: mapgakcoDetail } =
    useMapgakcoDetailQuery(mapgakcoId);

  const handleEdit = () => setIsEditing(true);
  const handleEditCancel = () => setIsEditing(false);

  return (
    <Container ref={ref}>
      {isLoading ? (
        <div>Loading...</div>
      ) : isEditing ? (
        <MapgakcoDetailOnEdit
          mapgakcoDetail={mapgakcoDetail}
          onCancel={handleEditCancel}
        />
      ) : (
        <MapgakcoDetailOnView
          mapgakcoDetail={mapgakcoDetail}
          myProfile={myProfile}
          onEdit={handleEdit}
        />
      )}
    </Container>
  );
};

export default MapgakcoDetailContainer;
