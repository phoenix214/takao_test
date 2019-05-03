import {
  GET_TRADE,
  GET_TRADE_SUCCESS, 
  GET_TRADE_FAILURE,
  GET_MARKETS,
  GET_MARKETS_SUCCESS, 
  GET_MARKETS_FAILURE,
} from './constants';

export function fetchTrades(dataId: any) {
  return (dispatch: any) => {
    dispatch(getTrade())

    return(fetch(`https://api.kraken.com/0/public/Trades?pair=${dataId}`))
    .then(res => res.json())
    .then(json => {
        return(dispatch(getTradeSuccess(json)))
    })
    .catch(err => dispatch(getTradeFailure()))
  }
}

function getTrade() {
  return {
      type: GET_TRADE
  }
}

function getTradeSuccess(data: any) {
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

export function fetchMarkets() {
  return (dispatch: any) => {
    dispatch(getMarkets())

    return(fetch(`https://api.kraken.com/0/public/AssetPairs`))
    .then(res => res.json())
    .then(json => {
        return(dispatch(getMarketsSuccess(json)))
    })
    .catch(err => dispatch(getMarketsFailure()))
  }
}

function getMarkets() {
  return {
      type: GET_MARKETS
  }
}

function getMarketsSuccess(data: any) {
  return {
      type: GET_MARKETS_SUCCESS,
      data
  }
}

function getMarketsFailure() {
  return {
      type: GET_MARKETS_FAILURE
  }
}
