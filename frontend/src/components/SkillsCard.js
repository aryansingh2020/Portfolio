

const SkillsCard = ({ text, skills }) => {
    return (
        <div className="flex flex-col items-center bg-white/30 backdrop-blur-sm border border-white/20 rounded-lg">
            <h1 className="text-[3dvh] text-yellow-400 font-extrabold mb-[3dvh]">{text}</h1>
            <div className="flex flex-wrap justify-center items-center max-w-[60dvh] h-fit">
                {Object.keys(skills).map((key) => {
                    return (
                        <div key={key} className="flex flex-col items-center w-[15dvh] h-[15dvh]">
                            <img alt={key} src={skills[key]} className="w-[10dvh] h-[10dvh]"></img>
                            <h1 className="text-white text-[2.5dvh] text-wrap">{key}</h1>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default SkillsCard