import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import { push } from "react-router-redux";
import authActions from "./authActions";
import { loginUser, logoutReq, isSession } from "./authService";

export function* getAuthenticationsSaga() {
  yield takeEvery(authActions.GET_AUTHENTICATION, function*({ payload }) {
    console.log(payload);
    try {
      const response = yield call(loginUser, payload);
      console.log(response);
      // const data = yield call(response.json.bind(response));

      if (response.name) {
        // localStorage.setItem('timeFilter', JSON.stringify({ from: 'now-1y', to: 'now' }));
        yield put({
          type: authActions.GET_AUTHENTICATION_SUCCESS,
          data:response,
          message: "Successfully login"
        });
      } else {
        yield put({
          type: authActions.GET_AUTHENTICATION_FAIL,

          message: "something Went wrong"
        });
      }
    } catch (error) {
      yield put({
        type: authActions.FETCH_ERROR,
        code: 555,
        status: false,
        message: "Something went wrong..!"
      });
    }
  });
}
export function* RegisterSaga() {
  yield takeEvery(authActions.REGISTER_NEW_USER, function*({ payload }) {
    try {
      const response = yield call(loginUser, payload);
      const data = yield call(response.json.bind(response));
      console.log(data);
      if (data) {
        // localStorage.setItem('timeFilter', JSON.stringify({ from: 'now-1y', to: 'now' }));
        yield put({
          type: authActions.REGISTER_NEW_USER_SUCCESS,
          status: data.status,
          code: data.code,
          data: data.data,
          message: data.message ? data.message : ""
        });
      } else {
        yield put({
          type: authActions.GET_AUTHENTICATION_FAIL,
          status: data.status,
          code: data.code,
          message: data.message ? data.message : ""
        });
      }
    } catch (error) {
      yield put({
        type: authActions.FETCH_ERROR,
        code: 555,
        status: false,
        message: "Something went wrong..!"
      });
    }
  });
}

export function* logout() {
  yield takeEvery(authActions.LOGOUT, function*() {
    try {
      const res = yield call(logoutReq);
      if (res.status === true) {
        yield put({
          type: authActions.LOGOUT_SUCCESS,
          token: false
        });
      } else {
        yield put({
          type: authActions.LOGOUT_ERROR,
          token: false,
          message: res.message
        });
      }
    } catch (error) {
      yield put({
        type: authActions.FETCH_ERROR,
        token: false,
        message: "Something went wrong..!"
      });
    }
  });
}

export function* logoutSuccess() {
  yield takeEvery(authActions.LOGOUT_SUCCESS, function*(payload) {
    yield localStorage.removeItem("timeFilter");
    yield put(push("/signin"));
  });
}

export function* checkAuthorization() {
  yield takeEvery(authActions.CHECK_AUTHORIZATION, function*() {
    try {
      const res = yield call(isSession);
      const data = yield call(res.json.bind(res));
      if (data.status === true) {
        localStorage.setItem(
          "timeFilter",
          JSON.stringify({ from: "now-1y", to: "now-0y" })
        );
        yield put({
          type: authActions.GET_AUTHENTICATION_SUCCESS,
          status: data.status,
          code: data.code,
          data: data.data,
          message: data.message ? data.message : ""
        });
      } else {
        yield put({
          type: authActions.LOGOUT_SUCCESS,
          status: data.status,
          code: data.code,
          message: data.message ? data.message : ""
        });
      }
    } catch (error) {
      yield put({
        type: authActions.FETCH_ERROR,
        token: false,
        message: "Something went wrong..!"
      });
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(getAuthenticationsSaga),
    fork(logout),
    fork(logoutSuccess),
    fork(checkAuthorization)
  ]);
}
