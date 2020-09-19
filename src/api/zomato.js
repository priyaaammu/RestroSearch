import axios from 'axios';

export default axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1',
    headers: {
        'user-key': 'a42dd41cf4b7f1076155d9d1be08ef34'
    }
});