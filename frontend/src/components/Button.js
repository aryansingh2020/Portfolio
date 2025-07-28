const Button=({onClick,text})=>{
    return(
        <div onClick={onClick} 
        className="button text-center pt-[2dvh] text-[2.5dvh] w-[16dvh] h-[9dvh] sm:text-[3dvh] text-white border border-x-2 border-y-2 hover:text-yellow-400  hover:border-yellow-400 font-bold rounded-full" >
            {text}
        </div>
    )
}

export default Button