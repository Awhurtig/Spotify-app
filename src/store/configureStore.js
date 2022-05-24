import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import authReducser from "./reducers/authReducer";
import * as actions from "./actions/index";
import playlistReducer from "./reducers/playlistReducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  auth: authReducser,
  playlist: playlistReducer,
});

const configureStore = () => {
  const middleWare = applyMiddleware(thunk);
  const store = createStore(rootReducers, composeEnhancer(middleWare));
  store.dispatch(actions.fetchToken);
  return store;
};

export default configureStore;
