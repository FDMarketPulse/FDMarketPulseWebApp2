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

import { rootReducer } from "./rootReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authState",'user'],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleWares: (false | Middleware<{}, any, Dispatch<AnyAction>>)[] = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
