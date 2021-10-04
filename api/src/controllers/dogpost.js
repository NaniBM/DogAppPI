const { Temperament, Dog } = require("../db.js");

const addNewBreed = async (req, res) => {
  const { name, height, weight, life_span, image, temperament } = req.body;
  try {
    //adding new Breed to the Database
    const [breed, created] = await Dog.findOrCreate({
      where: {
        name: name[0].toUpperCase() + name.slice(1),
        height: height,
        weight: weight,
        life_span: life_span,
      },
      defaults: {
        image,
      },
    });

    //if the new Breed was created, the temperaments are added to the table Temperament
    if (created) {
      for (let mood of temperament) {
        const [newMood] = await Temperament.findOrCreate({
          where: {
            name: mood[0].toUpperCase() + mood.slice(1),
          },
        });
        breed.addTemperament(newMood); // linking breed to the temperament
      }
      res.send({ created, breed }); // new breed successfully added
    } else {
      res.send({ created, breed }); // the breed already exists
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = addNewBreed;
