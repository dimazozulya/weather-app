// src/components/body/WeatherCard.jsx
import { useEffect, useState } from "react";
import { useApp } from "../../context/AppContext";
import { getCurrent } from "../../api/weather";

export default function WeatherCard () {
  const { currentCity, units } = useApp();
  const [data, setData] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    let cancelled = false;
    setErr("");
    setData(null);

    // WeatherAPI принимает строку в q: "Amsterdam" или "Amsterdam,NL"
    getCurrent(currentCity.name)
      .then(d => { if (!cancelled) setData(d); })
      .catch(e => { if (!cancelled) setErr(e.message); });

    // Перезапрашиваем ТОЛЬКО при смене города
    return () => { cancelled = true; };
  }, [currentCity.id]);

  if (err)   return <div style={{ color: 'red' }}>Ошибка: {err}</div>;
  if (!data) return <div>Загрузка...</div>;

  const { location, current } = data;
  const temp = units === "metric" ? current.temp_c : current.temp_f;

  return (
    <div className="min-h-screen flex items-start md:items-center justify-center font-bold text-3xl text-blue-700 mt-20">
      <div className="max-w-md mx-auto mt-10 md:mt-0 p-6 rounded-2xl shadow-lg bg-white text-center">
        <h2>{location.name}, {location.country}</h2>
        <p style={{ fontSize: 48, margin: "12px 0" }}>
          {Math.round(temp)}°{units === "metric" ? "C" : "F"}
        </p>
        <p style={{ color: "#4b5563" }}>{current.condition.text}</p>
        <img src={current.condition.icon} alt={current.condition.text} />
      </div>
    </div>
  );
}
