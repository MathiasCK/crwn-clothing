import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist"; // Make Cart Items stay in cart whenever the page is refreshing
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [thunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

//sagaMiddleware.run()

export const persistor = persistStore(store);

export default { store, persistor };
