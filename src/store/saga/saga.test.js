import {runSaga} from 'redux-saga';
import * as api from '../../api';

import {setUsersToStore,} from '../actions/usersActions';

import {fetchUsersSaga} from './sagas';

describe('makeDataApiRequest', () => {
    it('should call api and dispatch success action', async () => {
        const mockData = {
            results: {
                gender: 'female',
                name: {title: 'Ms', first: 'Donna', last: 'Fowler'},
                cell: '081-431-7871',
                dob: {date: '1970-10-09T22:55:20.285Z', age: 50},
                email: 'donna.fowler@example.com',
                id: {name: 'PPS', value: '9958655T'},
                location: {
                    street: {number: 9061, name: 'George Street'},
                    city: 'Galway',
                    state: 'Kildare',
                    country: 'Ireland'
                },
                login: {uuid: '44fde366-4672-4e0f-9b3b-6c73fb4f08f5', username: 'sadkoala796', password: 'cccc'},
                nat: 'IE',
                phone: '051-290-5931',
                picture: {large: 'https://randomuser.me/api/portraits/women/92.jpg'},
                registered: {date: '2005-08-16T19:00:51.282Z', age: 15}
            }
        };
        const fetchDataApi = jest.spyOn(api, 'fetchUsersApi').mockImplementation(() => Promise.resolve({
            mockData,
            status: 200
        }));
        const dispatched = [];
        const result = await runSaga({
            dispatch: (action) => dispatched.push({...action, payload: mockData}),
        }, fetchUsersSaga);

        expect(fetchDataApi).toHaveBeenCalledTimes(1);
        expect(dispatched[1].payload.results).toEqual(setUsersToStore(mockData).payload.results);
        fetchDataApi.mockClear();
    });
});

