import { combineReducers } from 'redux';
import uIStateReducer from '../reducers/uIStateReducer';
import usersReducer from '../reducers/usersReducer';
import alertReducer from '../reducers/alertReducer';

export default combineReducers({
  uIStateReducer,
  usersReducer,
  alertReducer
});
