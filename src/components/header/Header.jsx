import { useState } from "react";
import  BurgerButton  from "../ui/BurgerButton"
import BurgerMenu from "./BurgerMenu";

export default function Header () {

    const [ isBurgerOpen, setIsBurgerOpen ] = useState (false);

    const openBurgerMenu = () => {
        setIsBurgerOpen ( prev => !prev ); 
    } 
    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-white h-[60px]">
            <div className="flex justify-between items-center text-blue-700">
                <h1 className="text-6xl font-bold">weather-app .</h1>
                <BurgerButton isBurgerOpen={isBurgerOpen} openBurgerMenu={openBurgerMenu}/>
            </div>
                <BurgerMenu isBurgerOpen={isBurgerOpen}/>
        </header>
    )

}