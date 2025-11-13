

export default function ToggleButton ({isOn, onToggle}) {
    
    return (
         <button
         role="switch"
         className={[
            "w-10 h-5 rounded-2xl cursor-pointer relative transition-all duration-300 ",
            isOn
            ? 'bg-blue-700 border-blue-700'
            : 'bg-emerald-700 border-emerald-700'
        ].join (' ')}
         onClick={onToggle}>
            <div className={[
                "bg-white  w-[50%] h-full rounded-full inset-y-0 absolute duration-500",
                isOn
                ? 'translate-x-0'
                : 'translate-x-full'
            
            ].join(" ")}></div>
         </button>
    )
       
    
}