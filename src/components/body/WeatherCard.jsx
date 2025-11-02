import { useEffect, useState } from "react";

export default function WeatherCard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadWeather() {
        const API_KEY = import.meta.env.VITE_WEATHER_KEY;
      const city = "London";

      const res = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
      );
      const json = await res.json();
      setData(json);
    }

    loadWeather();
  }, []);

  console.log (data)

  if (!data) return <div>Загрузка...</div>;

  return (

    <div className="flex justify-center items-center mt-[300px] text-blue-700">
        <div className="bg-white p-[30px] text-center w-[300px] rounded-3xl font-bold">
            <div className="flex justify-between">
                <img src={data.current.condition.icon} alt="weather" />
                <h2 className="text-3xl ">{data.location.name}</h2>
            </div>
            <p>{data.current.temp_c}°C — {data.current.condition.text}</p>
        </div>
    </div>
    
  );
}
