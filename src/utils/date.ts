const ampmHours = (hours: number) => {
  const ampm = hours >= 12 ? "PM" : "AM";
  const hoursIn12Hour = hours % 12 || 12;

  return `${hoursIn12Hour}${ampm}`;
};

export const koreanDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = ampmHours(date.getHours());

  return `${year}년 ${month}월 ${day}일 ${hour}`;
};
