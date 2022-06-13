import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import combineReducers from "../redux/reducers";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers);

const configureStore = () => {
  let store = createStore(
    persistedReducer,
    compose(
      applyMiddleware(thunk),
      typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (f) => f
    )
  );

  let persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
