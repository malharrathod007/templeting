import { all } from "redux-saga/effects";
import authSagas from "./redux/auth/authSaga";

export default function* rootSaga(getState) {
  yield all([
    authSagas(),

  ]);
}
