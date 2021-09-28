export const temperamentToString = (breedList) => {
  return breedList.map((e) => {
    let temp = "";
    if (e.temperaments) {
      temp = e.temperaments[0].name;
      for (let i = 1; i < e.temperaments.length; i++) {
        temp = temp + ", " + e.temperaments[i].name;
      }
    } else temp = e.temperament;

    return {
      ...e,
      temperament: temp,
    };
  });
};
