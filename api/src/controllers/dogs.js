const { Dog, Temperament } = require("../db.js");
const { API_KEY } = process.env;
const axios = require("axios");

//Getting all breeds from Api
const dataFromApi = async () => {
  const { data } = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
  );
  return data.map((breed) => {
    return {
      id: breed.id,
      image: breed.image.url,
      name: breed.name,
      weight: { metric: breed.weight.metric },
      temperament: breed.temperament,
    };
  });
};

//response to http://localhost:3000/dogs or http://localhost:3000/dogs?name=
const getDogs = async (req, res) => {
  const { name } = req.query;

  try {
    const breeds = await dataFromApi(); //breeds from API
    const breedsDB = await Dog.findAll({
      //Breeds from DB
      attributes: ["id", "image", "name", "weight"],
      include: [
        {
          model: Temperament,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      ],
    });

    if (name) {
      //http://localhost:3000/dogs?name=
      const filterByBreed = breeds.filter((breed) =>
        breed.name.toLowerCase().includes(name.toLowerCase())
      ); //Filter on Api list
      const filterbyBreedDB = breedsDB.filter((breed) =>
        breed.name.toLowerCase().includes(name.toLowerCase())
      ); // filter on DB list
      filterByBreed.length || filterbyBreedDB.length
        ? res.send(filterbyBreedDB.concat(filterByBreed))
        : res.send("Dog breed not found");
    } else {
      //http://localhost:3000/dogs
      breedsDB.length ? res.send(breedsDB.concat(breeds)) : res.send(breeds);
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getDogs,
};
