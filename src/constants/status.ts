const status = {
  GATHERING: "GATHERING",
  CLOSED: "CLOSED",
  FULL: "FULL",
  DELETED: "DELETED",
};

export default status;
export type StatusKeyType = keyof typeof status;
