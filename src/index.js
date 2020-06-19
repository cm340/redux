import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index'
import App from './App';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
 ,
  document.getElementById('root')
);


