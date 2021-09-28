export const validateForm = (name, value) => {
  switch (!name || name) {
    case "name":
      return !value.length ? "Enter a breed name" : false;
    case "minHeight":
      return value === "0" ? "Enter minimum height" : false;
    case "maxHeight":
      return value === "0" ? "Enter maximum height" : false;
    case "minWeight":
      return value === "0" ? "Enter minimum weight" : false;
    case "maxWeight":
      return value === "0" ? "Enter maximum weight" : false;
    case "minLifeSpan":
      return value === "0" ? "Enter minimum life span" : false;
    case "maxLifeSpan":
      return value === "0" ? "Enter maximum life span" : false;
    default:
      return false;
  }
};
