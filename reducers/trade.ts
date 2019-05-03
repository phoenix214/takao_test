// placeReducer.js

import { GET_TRADE, GET_TRADE_SUCCESS, GET_TRADE_FAILURE } from '../actions/constants';

const initialState = {
  data: '',
};

const trade = (state = initialState, action: any) => {
  switch(action.type) {
    case GET_TRADE:
      return {
        ...state,
        isFetching: true,
      };
    case GET_TRADE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };
    case GET_TRADE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
}

export default trade;