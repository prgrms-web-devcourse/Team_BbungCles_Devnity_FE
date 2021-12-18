export const koreanDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();

  return `${year}-${month}-${day} ${hour}시`;
};
