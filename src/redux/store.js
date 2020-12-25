import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { phone } from './reducers';

const history = createBrowserHistory({ basename: '/' });

const initialState = {};
const rootReducer = combineReducers({
  phone,
  router: routerReducer,
});

const store = createStore(rootReducer, initialState);

export { store, history };
