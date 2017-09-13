import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// Testing
// import {fetchSearchGiphys} from './util/api_util';
// window.fetchSearchGiphys = fetchSearchGiphys;
import {receiveSearchGiphys, fetchSearchGiphys} from './actions/giphy_actions';
window.receiveSearchGiphys = receiveSearchGiphys;
window.fetchSearchGiphys = fetchSearchGiphys;

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});
