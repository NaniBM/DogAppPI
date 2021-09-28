const {
  GET_BREED,
  GET_DETAIL,
  GET_TEMPERAMENTS,
  FILTER,
  SEARCH_BY_NAME,
  SORT,
} = require("./actions_types");

const axios = require("axios");

export const getBreed = () => {
  return async function (dispatch) {
    const { data } = await axios.get("http://localhost:3001/dogs");
    dispatch({
      type: GET_BREED,
      payload: data,
    });
  };
};

export const getDetail = (id) => {
  return async function (dispatch) {
    const { data } = await axios.get(`http://localhost:3001/dogs/${id}`);
    dispatch({
      type: GET_DETAIL,
      payload: data,
    });
  };
};

export const getTemperaments = () => {
  return async function (dispatch) {
    const { data } = await axios.get("http://localhost:3001/temperament");
    dispatch({
      type: GET_TEMPERAMENTS,
      payload: data,
    });
  };
};

export const filterBy = (condition, attribute1) => {
  return {
    type: FILTER,
    payload: {
      condition,
      attribute1
    } 

  };
};


export const searchByName = (name) => {
  return async function (dispatch) {
    const { data } = await axios.get(`http://localhost:3001/dogs?name=${name}`);
    dispatch({
      type: SEARCH_BY_NAME,
      payload: data,
    });
  };
};

export const sortBreeds = (type, order) => {
  return {
    type: SORT,
    payload: { type, order },
  };
};
