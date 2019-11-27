import React, {StrictMode} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux'
import {store,history} from "./store"
import AppRouter from "./Approuter"

const App = () => {
  return (<div>
       <div style={{height:'100%'}}>
        <StrictMode>
        </StrictMode>
        <Provider store={store}>
          <AppRouter history={history} />
        </Provider>
      </div>
  </div>

  );
}
// Boot()
//   .then(() => App())
//   .catch(error => console.error(error));

export default App;
