export const filter = (breedList, condition, attribute) => {
  return breedList.filter(
    (breed) => breed[attribute] && breed[attribute].includes(condition)
  );
};