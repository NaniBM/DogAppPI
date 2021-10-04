const { Dog, Temperament } = require("../db.js");
const { API_KEY } = process.env;
const axios = require("axios");
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
        : res.send("No breed found for this ID");
    } else {
      //ID for breeds from the DB
      const detail = await Dog.findOne({
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
      detail ? res.send(detail) : res.send("No breed found for this ID");
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getDogsById,
};
