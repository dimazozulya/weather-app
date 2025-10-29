// src/context/AppContext.jsx
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AppContext = createContext(null);
export const useApp = () => useContext(AppContext);

const LS_CITY = "wa_current_city";
const LS_UNITS = "wa_units";


const DEFAULT_CITY = { id: "amsterdam-nl", name: "Amsterdam", country: "NL" };
const DEFAULT_UNITS = "metric"; // 'metric' | 'imperial'

export default function AppProvider({ children }) {
  const [currentCity, setCurrentCity] = useState(() => {
    try { return JSON.parse(localStorage.getItem(LS_CITY)) || DEFAULT_CITY; }
    catch { return DEFAULT_CITY; }
  });

  const [units, setUnits] = useState(() => {
    try { return localStorage.getItem(LS_UNITS) || DEFAULT_UNITS; }
    catch { return DEFAULT_UNITS; }
  });

  // сохранение в LS при изменениях
  useEffect(() => {
    try { localStorage.setItem(LS_CITY, JSON.stringify(currentCity)); } catch {}
  }, [currentCity]);

  useEffect(() => {
    try { localStorage.setItem(LS_UNITS, units); } catch {}
  }, [units]);

  const toggleUnits = () => setUnits(u => (u === "metric" ? "imperial" : "metric"));

  const value = useMemo(() => ({
    currentCity, setCurrentCity,
    units, toggleUnits
  }), [currentCity, units]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
