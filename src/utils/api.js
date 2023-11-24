import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers :{
    Authorization: `Client-ID yfA1K5YIQ0nPZ2yH-T08fRLlud6fC3__YJbL2xZUvcs`,
    },
});

export default api;
