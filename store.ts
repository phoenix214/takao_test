import { createStore, combineReducers, applyMiddleware } from 'redux';
import trade from './reducers/trade';
import markets from './reducers/markets';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  trade,
  markets,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;