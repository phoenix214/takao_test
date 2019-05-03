import { GET_TRADE, GET_TRADE_SUCCESS, GET_TRADE_FAILURE } from './constants';

export function fetchTrades(dataId) {
  return (dispatch) => {
    dispatch(getTrade())

    return(fetch(`https://api.kraken.com/0/public/Trades?pair=${dataId}`))
    .then(res => res.json())
    .then(json => {
        return(dispatch(getTradeSuccess(json)))
    })
    .catch(err => dispatch(getTradeFailure(err)))
  }
}

function getTrade() {
  return {
      type: GET_TRADE
  }
}

function getTradeSuccess(data) {
  return {
      type: GET_TRADE_SUCCESS,
      data
  }
}

function getTradeFailure() {
  return {
      type: GET_TRADE_FAILURE
  }
}
