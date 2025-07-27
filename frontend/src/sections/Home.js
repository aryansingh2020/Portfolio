import githubIcon from '../assets/github.svg'
import linkedInIcon from '../assets/linkedin.svg'
import leetCodeIcon from '../assets/leetcode.svg'
import portfolioPic from '../assets/portfolio.png'

const Home = () => {
    return (
        <div className="home flex items-center">
            <div className="left-side flex flex-col justify-evenly items-center min-w-[10dvh] h-[75dvh] rounded-tr-3xl rounded-br-3xl mr-[3dvh] bg-white/30 backdrop-blur-sm border border-white/20">
                <img src={githubIcon} alt="github" className="github-icon w-[8dvh] h-[10dvh]" />
                <img src={linkedInIcon} alt="linkeIn" className="linkedin-icon w-[8dvh] h-[10dvh]" />
                <img src={leetCodeIcon} alt="leetcode" className="leetcode-icon w-[8dvh] h-[10dvh]" />

            </div>

            <div className="middle flex flex-col w-fit h-[70dvh] justify-center ml-auto">
                <h2 className="text-[5dvh] text-white">Hi, I am</h2>
                <h1 className="text-[15dvh]  text-yellow-400">Aryan Singh</h1>
                <h3 className="text-[2.5dvh]  text-white">MERN Fullstack Developer / UI Designer</h3>
            </div>

            <div className="right-side profile flex flex-col items-center w-[100dvh] h-[70dvh] ml-auto mr-auto">
                <img src={portfolioPic} alt="profile-pic" className="image w-[30dvh] h-[30dvh] bg-yellow-400 rounded-full" />
                <div className="about w-fit">
                    <h1 className="text-yellow-400 text-[5dvh]">{"About"}</h1>
                    <p className="text-white text-[2.5dvh] min-w-[30dvh] text-wrap">
                        "I am a passionate web developer with a strong focus on building interactive, user-friendly, and visually appealing web applications."
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Home