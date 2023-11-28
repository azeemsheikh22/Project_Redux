// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import productSaga from "./productsaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddlewere = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddlewere],
});

sagaMiddlewere.run(productSaga);

export default store;
