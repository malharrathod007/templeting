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

