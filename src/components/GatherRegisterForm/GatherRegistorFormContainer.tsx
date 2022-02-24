import { useCallback, useState } from "react";
import dayjs from "dayjs";
import { MutateOptions } from "react-query";
import GatherRegisterForm from "./GatherRegisterForm";

import useToastUi from "../../hooks/useToastUi";
import { Gather } from "../../types/gather";
import { MutationData, MutationError } from "../../types/commonTypes";

interface Props {
  onModalClose: () => void;
  submitForm: (
    variables: unknown,
    options?: MutateOptions<MutationData, MutationError, unknown, unknown>
  ) => void;
  editData?: Gather;
}

const validate = (newGather) => {
  const newGatherKeys = Object.keys(newGather);

  const errors = newGatherKeys.filter(
    (key) => newGather[key].length === 0 || newGather[key] === "Invalid Date"
  );

  return errors;
};

const GatherRegistorFormContainer = ({
  onModalClose,
  submitForm,
  editData,
}: Props) => {
  const [editorRef, resetMarkDown] = useToastUi();

  const [title, setTitle] = useState(editData ? editData?.title : "");
  const [applicantCount, setApplicantCount] = useState(
    editData ? editData?.applicantLimit : null
  );
  const [category, setCategory] = useState(editData ? editData?.category : "");
  const [deadline, setDeadline] = useState<Date>(
    editData ? new Date(editData?.deadline.substring(0, 10)) : null
  );
  const [content, setContent] = useState(editData ? editData?.content : "");

  const [error, setError] = useState([]);

  const handleCategoryChange = useCallback((selectedCategory: string) => {
    setCategory(selectedCategory);
  }, []);

  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setTitle(value);
    },
    []
  );

  const handleApplicantChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      setApplicantCount(parseInt(value, 10));
    },
    []
  );

  const handleDeadlineChange = useCallback((value: Date) => {
    setDeadline(value);
  }, []);

  const handleContentChange = useCallback((value: string) => {
    setContent(value);
  }, []);

  const closeAndValueInitialize = () => {
    onModalClose();
    setCategory("");
    setTitle("");
    setApplicantCount(null);
    setDeadline(null);
    setContent("");
    setError([]);
  };

  const handleSubmit = () => {
    const value = {
      title,
      applicantLimit: applicantCount,
      deadline: dayjs(deadline).format("YYYY-MM-DD"),
      content,
      category,
    };

    const isError = validate(value);

    if (isError.length === 0) {
      editData
        ? submitForm({ ...value, gatherId: editData.gatherId })
        : submitForm(value);
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
      onTitleChange={handleTitleChange}
      onApplicantChange={handleApplicantChange}
      onCategoryChange={handleCategoryChange}
      onDeadlineChange={handleDeadlineChange}
      onContentChange={handleContentChange}
      onModalClose={handleModalClose}
      onSubmit={handleSubmit}
      error={error}
      editorRef={editorRef}
      isEdit={!!editData}
    />
  );
};

export default GatherRegistorFormContainer;
