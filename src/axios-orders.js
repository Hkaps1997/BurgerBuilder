import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-cd2e8.firebaseio.com/'
});

export default instance;