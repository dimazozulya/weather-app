import axios from 'axios'

const BASE_URL = 'https://api.openweather.org/2.5';
const API_KEY = import.meta.env.VITE_WEATHER_KEY;

export const weatherApi = axios.create ({
    baseURL: BASE_URL,
    params: {
        appid: API_KEY,
        units: 'metric',
        lang: 'ru'
    }
});