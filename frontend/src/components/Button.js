const Button=({onClick,text})=>{
    return(
        <div onClick={onClick} 
        className="button text-center w-[16dvh] h-[9dvh] text-[3dvh] text-white border border-x-2 border-y-2 hover:text-yellow-400  hover:border-yellow-400 font-bold rounded-full p-[2dvh]" >
            {text}
        </div>
    )
}

export default Button