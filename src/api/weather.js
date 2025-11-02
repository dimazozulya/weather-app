// async function getWeather () {

//     const API_KEY = import.meta.env.VITE_WEATHER_KEY;
//     const city = 'London';

//     try {
//         const res = await fetch (
//             `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
//         );
//         if (!res.ok) throw new Error (`Ошибка : ${res.status}`);

//         const data = await res.json();
//         console.log ('Ответ от API :', data)
//     } catch (err) {
//         console.error ('Ошибка запроса:', err);
//     }
// }

// getWeather ()