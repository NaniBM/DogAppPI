import addNewBreed from "./addNewBreed";
export const validateOnClick = (payload, newTemperament) => {
  const validtemp = newTemperament.find((el) => el.temperament !== "");
  if (
    payload.name === "" ||
    payload.height === "" ||
    payload.weigth === "" ||
    payload.life_span === "" ||
    !validtemp
  ) {
    alert("Check all the empty fields, add at least one temperament");
  } else {
    addNewBreed(payload);
  }
};
