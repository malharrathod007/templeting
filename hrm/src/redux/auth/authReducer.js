import authActions from "./authActions";

const initState = { loginAction: {} };

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case authActions.GET_AUTHENTICATION_SUCCESS:
      return {
        loginAction: action
      };

    case authActions.GET_AUTHENTICATION_FAIL:
      return {
        loginAction: action
      };

    case authActions.LOGOUT_SUCCESS:
      return {
        loginAction: action
      };

    case authActions.LOGOUT_ERROR:
      return {
        loginAction: action
      };

    default:
      return state;
  }
}