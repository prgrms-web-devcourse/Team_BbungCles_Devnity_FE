import { ChangeEvent, useCallback, useState } from "react";

const Input2 = () => {
  const [content, setContent] = useState("");

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setContent(value);
  }, []);

  return <input type="text" onChange={handleChange} value={content} />;
};

export default Input2;
