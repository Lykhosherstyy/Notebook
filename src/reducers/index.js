import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import { contacts } from './contacts.js';
import { filter } from './filter.js';
import { view } from './view.js';

export default combineReducers({ contacts, form, filter, view });