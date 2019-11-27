const authActions = {
    GET_AUTHENTICATION: "GET_AUTHENTICATION",
    GET_AUTHENTICATION_SUCCESS: "GET_AUTHENTICATION_SUCCESS",
    GET_AUTHENTICATION_FAIL: "GET_AUTHENTICATION_FAIL",

    CHECK_AUTHORIZATION: "CHECK_AUTHORIZATION",
    REGISTER_NEW_USER:"REGISTER_NEW_USER",
    REGISTER_NEW_USER_SUCCESS:"REGISTER_NEW_USER_SUCCESS",

    LOGOUT: "LOGOUT",
    LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
    LOGOUT_ERROR: "LOGOUT_ERROR",

    FETCH_ERROR: "FETCH_ERROR",

    getAuthAction: (name, password) => ({
        type: authActions.GET_AUTHENTICATION,
        payload: { name, password }
    }),
    Register:(data)=>({
        type:authActions.REGISTER_NEW_USER,
        payload:data
    }),
    logout: () => ({
        type: authActions.LOGOUT
    }),

    isSession: () => ({
        type: authActions.CHECK_AUTHORIZATION
    })
};

export default authActions;