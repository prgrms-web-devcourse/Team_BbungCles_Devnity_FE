import { useState } from "react";
import GatherMain from "./GatherMain";
// import useFilteredGathers from "../../hooks/useFilteredGathers";
import useGatherinfiniteQuery from "../../hooks/useGatherInfiniteQuery";

export interface IProps {
  selectedCategory?: string;
}

const GatherContainer = ({ selectedCategory }: IProps) => {
  const [filters, setFilters] = useState({
    title: null,
    category: selectedCategory || null,
    lastId: null,
    size: 19,
  });

  const {
    data: pages,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = useGatherinfiniteQuery(filters);

  // console.log(pages);

  const [modalVisible, setModalVisible] = useState(false);

  // const { gatherData } = useFilteredGathers(filters);

  const handleVisibleModal = (isModalVisible: boolean) => {
    setModalVisible(isModalVisible);
  };
  // console.log(filters);
  return (
    <GatherMain
      // gatherData={gatherData}
      selectedCategory={selectedCategory}
      modalVisible={modalVisible}
      handleVisibleModal={handleVisibleModal}
      pages={pages}
      isLoading={isLoading}
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      setFilters={setFilters}
    />
  );
};
export default GatherContainer;
