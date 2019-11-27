export const loginUser = payload => {
  console.log(payload);

  var oldItems = JSON.parse(localStorage.getItem("users"));
  console.log(oldItems);
  var user =""
   oldItems.map(key => {
    if (payload.name === key.name) {
      if ((payload.password = key.password)) {
        
         user=key
      }
    } else {
     user=false
    }
  });

  return user
};

export const logoutReq = () => {
  const requestOptions = {
    method: "GET",
    headers: {}
  };

  return fetch(`api/auth/logout`, requestOptions)
    .then(handleResponse)
    .then(user => {
      return user;
    });
};

export const isSession = () => {
  const requestOptions = {
    method: "GET",
    headers: {}
  };

  return fetch(`api/auth/isSession`, requestOptions);
  // .then(handleResponse)
  // .then(user => {
  //   return user;
  // });
};

function handleResponse(response) {
  return response.json().then(text => {
    if (!text.status) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logoutReq();
        //location.reload(true);
      }

      const error = (text && text.message) || response.statusText;
      return Promise.reject(error);
    }

    return text;
  });
}
