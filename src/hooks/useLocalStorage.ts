import { useState } from "react";

const useLocalStorage = (key: string, initialValue: unknown) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // TODO: JSON 오류가 발생했을때 어떻게 에러를 처리할지 팀원들과 고민 필요함
      // eslint-disable-next-line
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: unknown) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // TODO: JSON 오류가 발생했을때 어떻게 에러를 처리할지 팀원들과 고민 필요함
      // eslint-disable-next-line
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
