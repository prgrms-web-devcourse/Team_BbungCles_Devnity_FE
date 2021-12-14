import { useCallback, useState } from "react";
import GatherRegisterForm from "./GatherRegisterForm";

interface Props {
  onModalClose: () => void;
}

const GatherRegistorFormContainer = ({ onModalClose }: Props) => {
  const [title, setTitle] = useState("");
  const [applicantCount, setApplicantCount] = useState("");
  const [category, setCategory] = useState("");
  const [deadline, setDeadline] = useState("");
  const [content, setContent] = useState("");

  const handleCategory = useCallback((selectedCategory: string) => {
    setCategory(selectedCategory);
  }, []);

  const handleTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitle(value);
  }, []);

  const handleApplicant = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setApplicantCount(value);
    },
    []
  );

  const handleDeadline = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setDeadline(value);
    },
    []
  );

  const handleContent = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = e.target;
      setContent(value);
    },
    []
  );

  const closeAndValueInitialize = () => {
    onModalClose();
    setCategory("");
    setTitle("");
    setApplicantCount("");
    setDeadline("");
    setContent("");
  };

  const handleSubmit = () => {
    // TODO: 모집 등록 API 연동 추가해야 한다.
    closeAndValueInitialize();
  };

  const handleModalClose = () => {
    closeAndValueInitialize();
  };

  return (
    <GatherRegisterForm
      values={{ category, title, applicantCount, deadline, content }}
      onTitleChange={handleTitle}
      onApplicantChange={handleApplicant}
      onCategoryChange={handleCategory}
      onDeadline={handleDeadline}
      onContent={handleContent}
      onModalClose={handleModalClose}
      onSubmit={handleSubmit}
    />
  );
};

export default GatherRegistorFormContainer;
