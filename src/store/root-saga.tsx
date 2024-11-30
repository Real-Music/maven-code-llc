import { all } from "redux-saga/effects";
import userSaga from "./user/user-saga";
import homeSaga from "./home/home-saga";

export default function* rootSaga() {
  yield all([userSaga(), homeSaga()]);
}
