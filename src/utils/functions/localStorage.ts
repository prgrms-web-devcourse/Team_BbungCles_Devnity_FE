export const getLocalStorageItem = (key: string, initialValue: unknown) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  } catch (error) {
    return initialValue;
  }
};

export const setLocalStorageItem = (key: string, value: unknown) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // TODO: JSON 오류가 발생했을때 어떻게 에러를 처리할지 팀원들과 고민 필요함
    // eslint-disable-next-line
    console.error(error);
  }
};
