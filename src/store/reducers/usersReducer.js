import actionsTypes from '../actionsTypes';
import createReducer from '../reducers/createReducer';

const initialState = {
  users: [],
  selectedUser: null
};

const usersReducer = createReducer(initialState, {
  [actionsTypes.SET_USERS_TO_STORE]: (state, {payload}) => {
    return {
      ...state,
      users: payload
    };
  },
  [actionsTypes.SELECT_USER]: (state, {payload}) => {
    return {
      ...state,
      selectedUser: payload
    };
  }
});

export default usersReducer;

