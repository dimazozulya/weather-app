import axios from 'axios';

const BASE_URL = 'https://dataservice.accuweater.com';
const API_KEY = import.meta.env.VITE_ACCU_KEY;

export const api = axios.create ({
    baseURL: BASE_URL,
    headers: {Authorization: `Bearer ${API_KEY}`},
})

export async function getLocationKeyByCityName (city) {}
export async function getCurrentConditions (locationKey) {}