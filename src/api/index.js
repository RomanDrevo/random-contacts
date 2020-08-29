import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL || '';

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  `Bearer ${token}`;
    config.baseURL = baseUrl;
    return config;
});

export const fetchUsersApi = () => {
    return axios.get('/?results=10');
};
