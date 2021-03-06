export const isLoading = state => state.uIStateReducer?.isLoading;
export const getIsModalVisible = state => state.uIStateReducer?.isModalVisible;
export const getIsNotificationOpen = state => state.uIStateReducer?.isNotificationOpen;
export const getIsErrorWindowOpen = state => state?.uIStateReducer?.isErrorWindowOpen;
export const getNotificationMessage = state => state?.uIStateReducer?.notificationMessage;

export const getUsers = state => state.usersReducer?.users;
export const getSelectedUser = state => state.usersReducer?.selectedUser;

export const getErrorObject = state => state?.alertReducer;

