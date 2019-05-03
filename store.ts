import { createStore, combineReducers, applyMiddleware } from 'redux';
import trade from './reducers/trade';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  trade,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;