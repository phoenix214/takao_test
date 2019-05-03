// placeReducer.js

import { GET_MARKETS, GET_MARKETS_SUCCESS, GET_MARKETS_FAILURE } from '../actions/constants';

const initialState = {
  data: '',
};

const markets = (state = initialState, action: any) => {
  switch(action.type) {
    case GET_MARKETS:
      return {
        ...state,
        isFetching: true,
      };
    case GET_MARKETS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };
    case GET_MARKETS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
}

export default markets;