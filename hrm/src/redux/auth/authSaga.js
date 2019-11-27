import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import authActions from "./authActions";
import { loginUser} from "./authService";

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


export default function* rootSaga() {
  yield all([
    fork(getAuthenticationsSaga),
  
  ]);
}
