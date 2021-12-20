import { useCallback, useState } from "react";
import dayjs from "dayjs";
import GatherRegisterForm from "./GatherRegisterForm";
import useAddGather from "../../hooks/useAddGather";
import useToastUi from "../../hooks/useToastUi";

interface Props {
  onModalClose: () => void;
}

const validate = (newGather) => {
  const newGatherKeys = Object.keys(newGather);

  const errors = newGatherKeys.filter(
    (key) => newGather[key].length === 0 || newGather[key] === "Invalid Date"
  );

  return errors;
};

const GatherRegistorFormContainer = ({ onModalClose }: Props) => {
  const [editorRef, resetMarkDown] = useToastUi();

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
      const onlyNumber = value.replace(/[^0-9]/g, "");
      setApplicantCount(onlyNumber);
    },
    []
  );

  const handleDeadline = useCallback((value: string) => {
    setDeadline(value);
  }, []);

  const handleContent = useCallback((value: string) => {
    setContent(value);
  }, []);

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
      applicantLimit: applicantCount ? parseInt(applicantCount, 10) : "",
      deadline: dayjs(deadline).format("YYYY-MM-DD"),
      content,
      category,
    };

    const isError = validate(value);

    if (isError.length === 0) {
      addGather(value);
      closeAndValueInitialize();
      resetMarkDown();
    } else {
      setError(isError);
    }
  };

  const handleModalClose = () => {
    closeAndValueInitialize();
    resetMarkDown();
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
      editorRef={editorRef}
    />
  );
};

export default GatherRegistorFormContainer;
