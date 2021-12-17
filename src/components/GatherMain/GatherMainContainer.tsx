import { useState } from "react";
import GatherMain from "./GatherMain";
import useFilteredGathers from "../../hooks/useFilteredGathers";

export interface IProps {
  selectedCategory?: string;
}

const GatherContainer = ({ selectedCategory }: IProps) => {
  const [filters] = useState({
    category: selectedCategory || "",
    lastId: "",
    size: "10",
  });

  const [modalVisible, setModalVisible] = useState(false);

  const { gatherData } = useFilteredGathers(filters);

  const handleVisibleModal = (isModalVisible: boolean) => {
    setModalVisible(isModalVisible);
  };

  return (
    <GatherMain
      gatherData={gatherData}
      selectedCategory={selectedCategory}
      modalVisible={modalVisible}
      handleVisibleModal={handleVisibleModal}
    />
  );
};
export default GatherContainer;
