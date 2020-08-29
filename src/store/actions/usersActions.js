import types from '../actionsTypes';

export const fetchUsers = data =>{
  return{
    type: types.FETCH_USERS,
    payload: data
  };
};

export const setUsersToStore = data =>{
  return{
    type: types.SET_USERS_TO_STORE,
    payload: data
  };
};

export const selectUser = data =>{
  return{
    type: types.SELECT_USER,
    payload: data
  };
};

