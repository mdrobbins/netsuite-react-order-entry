export const isEmpty = (object) => {
  return ((object == null) && typeof(object) !== 'number') || Object.keys(object).length === 0;
};