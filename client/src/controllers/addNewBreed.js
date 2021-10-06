import axios from "axios";

export default async (payload) => {
  try {
    const { data } = await axios.post("http://localhost:3001/dog", payload);
    data.created ? alert("New breed succesfully added"):
    alert("The breed alredy exists");
  } catch (error) {
    console.error(error);
  }
};
