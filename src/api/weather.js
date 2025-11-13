import { fetchJSON } from "./http";

export function getCurrent (q, opts ={}) {
    return fetchJSON ('/current.json', {q, aqi: 'no', ...opts})
}

export function searchCities (q) {
    return fetchJSON ('/search.json', { q })
    .then (list => list.map(x => ({
        id :  `${x.name}-${x.country}-${x.lat}-${x.lon}`,
        name: x.name,
        country : x.country,
        }))
    )
}