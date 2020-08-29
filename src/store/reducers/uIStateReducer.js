import actionsTypes from '../actionsTypes';
import createReducer from './createReducer';

const initialState = {
    isLoading: false,
    isErrorWindowOpen: false,
    isModalVisible: false,
    isNotificationOpen: false,
    notificationMessage: ''
};

const UIStateReducer = createReducer(initialState, {
    [actionsTypes.SET_LOADING]: (state, {payload}) => {
        return {
            ...state,
            isLoading: payload
        };
    },
    [actionsTypes.TOGGLE_ERROR_WINDOW_IS_OPEN]: state => {
        return {
            ...state,
            isErrorWindowOpen: !state.isErrorWindowOpen
        };
    },
});

export default UIStateReducer;
