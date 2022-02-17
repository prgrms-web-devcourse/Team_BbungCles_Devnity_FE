export const isValidImageSrc = (src): boolean => {
  if (!src) {
    return false;
  }

  return src.match(/\.*(jpeg|jpg|gif|png|img)/) !== null;
};
