

const PageTitle = ({ text }) => {
    return (
         <div className="page-title text-white flex flex-col justify-center items-cente min-w-[10dvh] h-[75dvh] rounded-tr-3xl rounded-br-3xl mr-[3dvh] bg-white/30 backdrop-blur-sm border border-white/20">
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