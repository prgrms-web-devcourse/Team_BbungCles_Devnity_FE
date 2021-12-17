import { useCallback, useState } from "react";
import GatherRegisterForm from "./GatherRegisterForm";
import useAddGather from "../../hooks/useAddGather";

interface Props {
  onModalClose: () => void;
}

const validate = (newGather) => {
  const newGatherKeys = Object.keys(newGather);

  const errors = newGatherKeys.filter((key) => newGather[key].length === 0);

  return errors;
};
const GatherRegistorFormContainer = ({ onModalClose }: Props) => {
  const [title, setTitle] = useState("");
  const [applicantCount, setApplicantCount] = useState("");
  const [category, setCategory] = useState("");
  const [deadline, setDeadline] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState([]);

  const { addGather } = useAddGather();

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
    setError([]);
  };

  const handleSubmit = () => {
    const value = {
      title,
      applicantLimit: applicantCount || "",
      deadline,
      content,
      category,
    };

    const isError = validate(value);

    if (isError.length === 0) {
      addGather(value);
      closeAndValueInitialize();
    } else {
      setError(isError);
    }
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
      error={error}
    />
  );
};

export default GatherRegistorFormContainer;
