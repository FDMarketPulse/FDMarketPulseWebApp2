import {
  AnyAction,
  applyMiddleware,
  compose,
  createStore,
  Dispatch,
  Middleware,
} from "redux";
import { persistReducer, persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

import rootSaga from "./rootSaga";

import {rootReducer} from "./rootReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);
console.log("this is root",rootReducer)
const middleWares: (false | Middleware<{}, any, Dispatch<AnyAction>>)[] = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// @ts-ignore
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);
console.log("Initial state:", store.getState());

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
