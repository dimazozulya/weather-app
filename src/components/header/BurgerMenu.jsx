import ToggleButton from "../ui/ToggleButton";
import { useApp } from "../../context/AppContext";
import { useState, useMemo } from "react";
import { mockCities } from "../../constants/mockCities";

export default function BurgerMenu ({isBurgerOpen}) {
    const { units, toggleUnits, currentCity, setCurrentCity } = useApp();
    const isOn = units === 'metric';

    const [query, setQuery ] = useState ('');

      const filtered = useMemo (() => {
        const value = query.trim().toLowerCase();
        if (!value) return mockCities;
        return mockCities.filter(i => 
            i.name.toLowerCase().includes(value) || 
            i.country.toLowerCase().includes(value)
        )
      }, [query]);

      const handleSelect = (city) => {
        setCurrentCity (city);
      }


    return (
        <div
            className={[
                "fixed top-[60px] z-50 bg-white text-blue-700 w-[30%] h-[calc(100vh-60px)] shadow-xl overflow-y-auto transition-all duration-500 ease-in-out",
                isBurgerOpen 
                ?  "right-0"
                :  "right-[-1000px]"
            ].join(" ")}>
                <h2 className="text-xl">Choose place</h2>
                <input
                    placeholder="choose city.."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}/>
                <ul>
                    {filtered.map (c => (
                        <div className="flex justify-between px-10 py-1">
                            <li className='text-xl' key={c.id}>{c.name}</li>
                            <button className='p-1 bg-blue-700 text-white cursor-pointer border rounded hover:bg-white hover:text-blue-700 transition-all duration-300' 
                            onClick={() => {
                                handleSelect(c);
                                setQuery('');
                            }}>select</button>
                        </div>
                    ))}
                    {filtered.length === 0 && (
                        <h2 className="text-red-700">not found</h2>
                    )} 
                </ul>
                

                <h2 className="text-xl">Metric Switcher</h2>
                <div className="flex justify-center items-center">
                    <ToggleButton isOn={isOn} onToggle={toggleUnits}></ToggleButton>
                    <span className="text-l px-2 py-1">°C/°F</span>
                </div>
                {/* <ul 
                    className="flex items-start h-full flex-col  text-4xl pl-2 ">
                        <li><a href="#">COUNTRY .</a></li>
                        <li><a href="#">CITY .</a></li>
                        <li><a href="#">VALUES .</a></li>
                        <li><a href="#">ABOUTUS .</a></li>
                        <li><a href="#">INFO .</a></li>
                </ul> */}
                
            </div>
    )
}