// placeReducer.js

import { GET_TRADE } from '../actions/types';

const initialState = {
  placeName: '',
  places: []
};

const trade = (state = initialState, action) => {
  switch(action.type) {
    case GET_TRADE:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}

export default trade;