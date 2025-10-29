export default function BurgerButton ({isBurgerOpen, toggleBurgerMenu}) {
    return (
        <button
                    aria-label="Toggle menu"
                    aria-expanded={isBurgerOpen}
                    onClick={() => {
                        toggleBurgerMenu()
                    }}
                    className="flex flex-col justify-between w-8 h-6 mr-5 cursor-pointer">
                                <span 
                                    className={[
                                        "block h-[5px] w-full bg-blue-700 rounded transition-all duration-300 ease-in-out origin-center",
                                        isBurgerOpen ? "translate-y-[9px] rotate-45" : ""
                                    ].join (" ")}
                                />
                                <span 
                                    className={[
                                        "block h-[5px] w-full bg-blue-700 rounded transition-all duration-300 ease-in-out origin-center",
                                        isBurgerOpen ? "opacity-0" : "opacity-100"
                                    ].join (" ")}
                                />
                                <span 
                                    className={[
                                        "block h-[5px] w-full bg-blue-700 rounded transition-all duration-300 ease-in-out origin-center",
                                        isBurgerOpen ? "-translate-y-[9px] -rotate-45" : ""
                                    ].join (" ")}
                                />                   
                </button>
    )
}