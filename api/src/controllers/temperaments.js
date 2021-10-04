const { Temperament } = require("../db.js");
const axios = require("axios");
const { API_KEY } = process.env;

//Getting temperaments from the API
const temperamentList = async () => {
  try {
    let { data } = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
    );
    let moods = [];   
    data.forEach((breed) => {
      if (breed.temperament) {
        let breedMood = breed.temperament.split(", ");
        moods = moods.concat(breedMood);
      }
    });
    return [...new Set(moods)];
  } catch (err) {
    console.error(err);
  }
};

//getting temeraments from DB, if empty, charge from API
const loadTemperaments = async () => {
  try {
    let moodsDB = await Temperament.findAll();
    if (!moodsDB || !moodsDB.length) {
      moodsDB = await temperamentList();
      for (let mood of moodsDB) {
        await Temperament.findOrCreate({
          where: { name: mood },
        });
      }
    }
    return moodsDB;
  } catch (error) {
    console.error(error);
  }
};

const getTemperaments = async (res) => {
  try {
    const moods = await loadTemperaments();
    moods ? res.send(moods.sort((a, b) => a.name.localeCompare(b.name))) : null;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getTemperaments };
