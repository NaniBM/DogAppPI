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
      temperament: breed.temperament,
      name: breed.name,
      weight: { metric: breed.weight.metric },
    };
  });
};

//Getting all breeds from API with more details to filter by id
const detailById = async () => {
  try {
    const { data } = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
    );
    return data.map((breed) => {
      return {
        id: breed.id,
        image: breed.image.url,
        temperament: breed.temperament,
        name: breed.name,
        weight: { metric: breed.weight.metric },
        height: { metric: breed.height.metric },
        life_span: breed.life_span,
      };
    });
  } catch (err) {
    return err;
  }
};

//response to http://localhost:3000/dogs or http://localhost:3000/dogs?name=
const getDogs = async (req, res) => {
  const { name } = req.query;

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
    try {
      const filterByBreed = breeds.filter((breed) =>
        breed.name.toLowerCase().includes(name.toLowerCase())
      ); //Filter on Api list
      const filterbyBreedDB = breedsDB.filter((breed) =>
        breed.name.toLowerCase().includes(name.toLowerCase())
      ); // filter on DB list
      filterByBreed.length || filterbyBreedDB.length
        ? res.send(filterbyBreedDB.concat(filterByBreed))
        : res.send("Dog breed not found");
    } catch (error) {
      console.error(error);
    }
  } else {
    //http://localhost:3000/dogs
    breedsDB.length ? res.send(breedsDB.concat(breeds)) : res.send(breeds);
  }
};

//response to http://localhost:3000/:id
const getDogsById = async (idRaza, res) => {
  try {
    if (!idRaza.includes("-")) {
      //ID for breeds from the API
      const detail = await detailById();
      const detailedBreed = detail.find(
        (breed) => breed.id.toString() === idRaza
      );
      detailedBreed
        ? res.send(detailedBreed)
        : res.send("No hay razas para ese Id");
    } else {
      //ID for breeds from the DB
      const detail = await Breed.findOne({
        where: { id: idRaza },
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
      detail ? res.send(detail) : res.send("There is not breeds for this ID");
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getDogs,
  getDogsById,
};
