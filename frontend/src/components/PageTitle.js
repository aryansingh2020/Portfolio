

const PageTitle = ({ text }) => {
    return (
         <div 
         className="page-title text-white flex justify-center items-center w-[40dvh] sm:bg-white/30 sm:backdrop-blur-sm sm:border sm:border-white/20 sm:flex-col sm:w-[10dvh] sm:h-[75dvh] sm:rounded-tr-3xl sm:rounded-br-3xl">
            {text.split("").map((letter,index) => {
                return (
                    <div key={index}>
                        <h1 className=" flex flex-col text-center text-[5dvh] font-extrabold hover:text-yellow-400">
                            <span>{letter}</span>
                        </h1>
                    </div>
                )
            })}
        </div>
    )
}

export default PageTitle