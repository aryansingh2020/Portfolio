import Button from './Button.js'
const Navbar=({setActiveSection})=>{
    
    return(
        <div>
            <nav className="navbar flex justify-center items-center gap-[3dvh] h-[14dvh] sm:h-[15dvh]">
                <Button onClick={()=>setActiveSection("home")} text={"Home"}/>
                <Button onClick={()=>setActiveSection("skills")} text={"Skills"}/>
                <Button onClick={()=>setActiveSection("projects")} text={"Projects"}/>
                <Button onClick={()=>setActiveSection("contact")} text={"Contact"}/>
            </nav>
        </div>
    )
}

export default Navbar