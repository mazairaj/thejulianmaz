import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import mainReducer from './reducers/combineReducers';

const configureStore = () => {
  const middlewares = [thunk];

  return createStore(
    mainReducer,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;
