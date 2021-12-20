import { all, fork } from "redux-saga/effects";
import watchList from "./component/Home/saga";
export default function* rootSaga() {
    yield all([fork(watchList)]);
}
