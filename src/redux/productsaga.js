import { put, takeEvery } from "redux-saga/effects";
import { Product_List, Set_Product_List } from "./config";

function* getapi() {
  let data = yield fetch("http://localhost:5000/products");
  data = yield data.json();
 console.warn("prodlist action", data);
    yield put({type: Set_Product_List, data:data})
}

function* productSaga() {
  yield takeEvery(Product_List, getapi);
}

export default productSaga;
