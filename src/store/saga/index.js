import {takeEvery} from 'redux-saga/effects';
import types from '../actionsTypes';
import {fetchUsersSaga} from './sagas';

export function* watchSaga() {
  yield takeEvery(types.FETCH_USERS, fetchUsersSaga);
}
