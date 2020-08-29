import {call, put} from 'redux-saga/effects';
import {setLoading, toggleErrorWindowIsOpen} from '../actions/uIStateActions';
import {fetchUsersApi} from '../../api';
import {setUsersToStore} from '../actions/usersActions';
import {setAlert} from '../actions/alertActions';
import {NOTIFICATIONS} from '../../utils/constatns';


export function* fetchUsersSaga() {
    try {
        yield put(setLoading(true));
        const response = yield call(fetchUsersApi);

        console.log(response);

        if (response.status === 200 && response.data.results) {
            yield put(setUsersToStore(response.data.results));
        }

        yield put(setLoading(false));

    } catch (error) {
        yield put(setLoading(false));
        yield put(
            setAlert({
                status: 'error',
                title: 'Error',
                message: error.message
            })
        );
        yield put(toggleErrorWindowIsOpen());
    }
}

