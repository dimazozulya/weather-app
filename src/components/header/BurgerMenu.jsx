export default function BurgerMenu ({isBurgerOpen}) {
    return (
        <div
            className={[
                "fixed top-[60px] z-50 bg-white text-blue-700 w-[40%] h-[calc(100vh-60px)] shadow-xl overflow-y-auto transition-all duration-500 ease-in-out",
                isBurgerOpen 
                ?  "right-0"
                :  "right-[-500px]"
            ].join(" ")}>
                <ul 
                    className="flex items-start h-full flex-col justify-between text-5xl pl-2 py-8 ">
                        <li><a href="#">COUNTRY .</a></li>
                        <li><a href="#">CITY .</a></li>
                        <li><a href="#">VALUES .</a></li>
                        <li><a href="#">ABOUTUS .</a></li>
                        <li><a href="#">INFO .</a></li>
                </ul>
            </div>
    )
}