import { applyMiddleware, createStore } from "redux";
import reducer from "./rootReducers";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";

const middleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(middleware));
middleware.run(rootSaga);
export default store;
