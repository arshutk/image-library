import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID Mb4MS5k7IJFqepJ84wCeNMkf_OeoHug7ix00LQYUmh8'
    }
});

