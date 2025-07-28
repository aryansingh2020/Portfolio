import githubIcon from '../assets/github.svg'
import linkedInIcon from '../assets/linkedin.svg'
import leetCodeIcon from '../assets/leetcode.svg'
import portfolioPic from '../assets/portfolio.png'

const Home = () => {
    return (
        <div className="home flex flex-col justify-evenly items-center gap-[2dvh] sm:flex-row  ">
            <div className="left-side flex justify-evenly w-[40dvh] sm:bg-white/30 sm:backdrop-blur-sm sm:border sm:border-white/20 sm:flex-col sm:items-center sm:w-[10dvh] sm:h-[75dvh] sm:rounded-tr-3xl sm:rounded-br-3xl sm:mr-[3dvh]">
                <a href="https://github.com/aryansingh2020"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={githubIcon} alt="github" className="github-icon w-[8dvh] h-[8dvh]" />
                </a>

                <a
                    href="https://www.linkedin.com/in/aryansingh2020"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={linkedInIcon} alt="linkeIn" className="linkedin-icon w-[8dvh] h-[8dvh]" />
                </a>

                <a
                    href="https://leetcode.com/u/aryansingh20"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={leetCodeIcon} alt="leetcode" className="leetcode-icon w-[8dvh] h-[8dvh]" />
                </a>
            </div>

            <div className="name-designation flex flex-col w-fit h-fit  justify-center sm:ml-auto">
                <h2 className=" text-[4dvh] sm:text-[5dvh] text-white">Hi, I am</h2>
                <h1 className=" text-[10dvh] sm:text-[15dvh]  text-yellow-400">Aryan Singh</h1>
                <h3 className=" text-[2dvh] sm:text-[2.5dvh]  text-white">MERN Fullstack Developer / UI Designer</h3>
            </div>

            <div className="profile flex flex-col items-center w-fit sm:w-[100dvh] sm:h-[70dvh] sm:ml-auto sm:mr-auto">
                <img src={portfolioPic} alt="profile-pic" className="image w-[20dvh] sm:w-[30dvh] sm:h-[30dvh] bg-yellow-400 rounded-full" />
                <div className="about w-fit">
                    <h1 className="text-yellow-400 text-[5dvh]">{"About"}</h1>
                    <p className="text-white text-[2.5dvh] w-[50dvh] sm:w-[60dvh] text-wrap">
                        "I am a passionate web developer with a strong focus on building interactive, user-friendly, and visually appealing web applications."
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Home