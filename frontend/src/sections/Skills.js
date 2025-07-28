import mongodbIcon from '../assets/mongodb.svg'
import expressIcon from '../assets/express.svg'
import reactIcon from '../assets/react.svg'
import nodejsIcon from '../assets/nodejs.svg'
import gitIcon from '../assets/git.svg'
import htmlIcon from '../assets/html.svg'
import javascriptIcon from '../assets/javascript.svg'
import vscodeIcon from '../assets/vscode.svg'
import tailwindcssIcon from '../assets/tailwindcss.svg'
import mysqlIcon from '../assets/mysql.svg'
import pythonIcon from '../assets/python.svg'
import figmaIcon from '../assets/figma.svg'
import hindiIcon from '../assets/hindi.svg'
import englishIcon from '../assets/english.svg'
import cppIcon from '../assets/cpp.svg'
import javaIcon from '../assets/java.svg'

import SkillsCard from '../components/SkillsCard.js'
import PageTitle from '../components/PageTitle.js'

const usingNowSkills = {
    "HTML": htmlIcon,
    "JavaScript": javascriptIcon,
    "MongoDB": mongodbIcon,
    "ExpressJS": expressIcon,
    "ReactJS": reactIcon,
    "NodeJS": nodejsIcon,
    "Git": gitIcon,
    "VScode": vscodeIcon
}

const learningSkills = {
    "Tailwindcss": tailwindcssIcon,
    "MySQL": mysqlIcon,
    "Python":pythonIcon,
    "Figma": figmaIcon
}

const otherSkills = {
    "Cpp": cppIcon,
    "Java": javaIcon,
    "Hindi": hindiIcon,
    "English": englishIcon
}

const Skills = () => {
    return (
        <div className="skills flex flex-col gap-[3dvh] items-center sm:flex-row sm:gap-0">
            <PageTitle text={"SKILLS"}/>
            <div className="flex flex-col sm:flex-row sm:justify-evenly ml-auto mr-auto gap-[2dvh]">
                <SkillsCard text={"LEARNING:"} skills={learningSkills} />
                <SkillsCard text={"USING NOW:"} skills={usingNowSkills} />
                <SkillsCard text={"OTHER:"} skills={otherSkills} />
            </div>
        </div>
    )
}

export default Skills