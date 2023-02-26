import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Routing from './routes';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from '../src/reducer/index'
import Example from './usestate';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(
   reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && 
   window.__REDUX_DEVTOOLS_EXTENSION__()
)
root.render(
   <Provider store = {store}>
      <Routing />
   </Provider>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
