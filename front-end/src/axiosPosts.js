import axios from 'axios';

const axiosPosts = axios.create({
    baseURL: 'http://localhost:8000'
});

export default axiosPosts;