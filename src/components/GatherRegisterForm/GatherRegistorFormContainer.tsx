import { useCallback, useState } from "react";
import GatherRegisterForm from "./GatherRegisterForm";

interface Props {
  onModalClose: () => void;
}

const GatherRegistorFormContainer = ({ onModalClose }: Props) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const handleChangeTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setTitle(value);
    },
    []
  );

  const handleChangeCategory = useCallback((nextCategory: string) => {
    setCategory(nextCategory);
  }, []);

  return (
    <GatherRegisterForm
      title={title}
      category={category}
      onTitleChange={handleChangeTitle}
      onCategory={handleChangeCategory}
      onModalClose={onModalClose}
    />
  );
};

export default GatherRegistorFormContainer;
