import { createStore, combineReducers } from 'redux';
import trade from './reducers/trade';

const rootReducer = combineReducers({
  trade,
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;