// libraries
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//reducers
import combineReducers from "../../../redux/reducers";

export const setupStore = () => {
  return createStore(combineReducers, compose(applyMiddleware(thunk)));
};
