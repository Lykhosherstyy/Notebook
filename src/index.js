import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import ContactBookApp from './containers/ContactBookApp.jsx';

import store from './store';

import 'normalize.css';
import 'styles/_main.scss';


ReactDOM.render(
  <Provider store={store}>
    <ContactBookApp />
  </Provider>,
  document.getElementById('root')
);
