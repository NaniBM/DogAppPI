import {
  GET_BREED,
  GET_DETAIL,
  GET_TEMPERAMENTS,
  FILTER,
  SEARCH_BY_NAME,
  SORT,
} from "../actions/actions_types";

import { filter } from "../controllers/filters";
import {
  temperamentFromArrToString,
  temperamentFromObjToString,
} from "../controllers/temperamentsToString";

const initialState = {
  allbreeds: [],
  temperaments: [],
  breeds: [],
  detailed: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BREED:
      return {
        ...state,
        allbreeds: temperamentFromArrToString(action.payload),
        breeds: temperamentFromArrToString(action.payload),
      };
    case GET_DETAIL:
      return {
        ...state,
        detailed: temperamentFromObjToString(action.payload),
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload.map((e) => e.name),
      };
    case SEARCH_BY_NAME:
      return {
        ...state,
        breeds: action.payload,
      };

    case FILTER:
      return {
        ...state,
        breeds: filter(
          state.allbreeds,
          action.payload.condition,
          action.payload.attribute1
        ),
      };
    case SORT:
      const currentState = state.breeds;
      if (!Array.isArray(state.breeds) || !state.breeds.length) {
        return {
          ...state,
          breeds: currentState,
        };
      }
      if (action.payload.type === "abc") {
        if (action.payload.order === "A-Z") {
          return {
            ...state,
            breeds: currentState.sort((a, b) => a.name.localeCompare(b.name)),
          };
        }
        return {
          ...state,
          breeds: currentState.sort((a, b) => b.name.localeCompare(a.name)),
        };
      }
      if (action.payload.order === "Asc") {
        return {
          ...state,
          breeds: currentState.sort(function (a, b) {
            return (
              a.weight.metric.split(" - ")[1] - b.weight.metric.split(" - ")[1]
            );
          }),
        };
      }
      return {
        ...state,
        breeds: currentState.sort(function (a, b) {
          return (
            b.weight.metric.split(" - ")[1] - a.weight.metric.split(" - ")[1]
          );
        }),
      };

    default:
      return state;
  }
};

export default rootReducer;
