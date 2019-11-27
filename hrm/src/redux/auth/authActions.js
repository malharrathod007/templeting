const authActions = {
    GET_AUTHENTICATION: "GET_AUTHENTICATION",
    GET_AUTHENTICATION_SUCCESS: "GET_AUTHENTICATION_SUCCESS",
    GET_AUTHENTICATION_FAIL: "GET_AUTHENTICATION_FAIL",


    getAuthAction: (name, password) => ({
        type: authActions.GET_AUTHENTICATION,
        payload: { name, password }
    }),
   
};

export default authActions;