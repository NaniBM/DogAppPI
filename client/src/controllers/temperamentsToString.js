export const temperamentFromObjToString = (breedList) => {
  let temp = "";
  if (breedList.temperaments) {
    temp = breedList.temperaments[0].name;
    for (let i = 1; i < breedList.temperaments.length; i++) {
      temp = temp + ", " + breedList.temperaments[i].name;
    }
  } else temp = breedList.temperament;
  return {
    ...breedList,
    temperament: temp,
  };
};

export const temperamentFromArrToString = (breedList) => {
  return breedList.map((e) => temperamentFromObjToString(e));
};
