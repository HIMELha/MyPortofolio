import axios from 'axios';

export default axios.create({
    baseURL: 'https://taskapp.webhex.xyz/public/api',
    // baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        'Content-Type':'application/json'
    }
})