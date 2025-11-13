const BASE_URL = 'http://api.weatherapi.com/v1';
const API_KEY = import.meta.env.VITE_WEATHERAPI_KEY;

export async function fetchJSON (path, params = {}) {
    const qs = new URLSearchParams ({key: API_KEY, ...params}).toString();
    const url = `${BASE_URL}${path}?${qs}`;

    const res = await fetch (url);
    if (!res.ok) throw new Error (`HTTP ${res.status}`);
    return res.json()
}