import { createStore, combineReducers } from 'redux';
import stock from './Men/reducers';

const reducer = combineReducers({
  stock
});
export default () => {
  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
