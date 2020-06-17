import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/root_reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const configureStore = (preloadedState) => {
  const middleware = [thunk];
  if (process.env.NODE_ENV === "development") {
    middleware.push(logger);
  }
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware)
  );
};

export default configureStore;
