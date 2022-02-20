import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import filterReducer from './filterReducer';

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
