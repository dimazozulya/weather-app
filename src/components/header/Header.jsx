import { useEffect, useState, useRef } from "react";
import BurgerButton  from "../ui/BurgerButton"
import BurgerMenu from "./BurgerMenu";

export default function Header () {
    
    const [ isBurgerOpen, setIsBurgerOpen ] = useState (false);

    useEffect (() => {
        if (isBurgerOpen) {
            const onKey = (e) => {
                if (e.key === 'Escape') 
                    closeBurger?.();
                }
            window.addEventListener ('keydown', onKey)
            return () => {
                window.removeEventListener ('keydown', onKey);
            }
            
        }
    }, [isBurgerOpen])

    const toggleBurgerMenu = () => {
        setIsBurgerOpen ( prev => !prev ); 
    } 
    const closeBurger = () => {
         setIsBurgerOpen (false);
    }
    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-white h-[60px]">
            <div className="flex justify-between items-center text-blue-700">
                <h1 className="text-6xl font-bold">weather-app .</h1>
                <BurgerButton isBurgerOpen={isBurgerOpen} toggleBurgerMenu={toggleBurgerMenu} closeBurger={closeBurger}/>
            </div>
                <BurgerMenu isBurgerOpen={isBurgerOpen}/>
        </header>
    )

}