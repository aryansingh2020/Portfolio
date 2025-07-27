import Button from './Button.js'
const Navbar=({setActiveSection})=>{
    
    return(
        <div>
            <nav className="navbar flex justify-center items-center gap-5 w-[100%] h-[15dvh]">
                <Button onClick={()=>setActiveSection("home")} text={"Home"}/>
                <Button onClick={()=>setActiveSection("skills")} text={"Skills"}/>
                <Button onClick={()=>setActiveSection("projects")} text={"Projects"}/>
                <Button className="button bg-orange-600" onClick={()=>setActiveSection("contact")} text={"Contact"}/>
            </nav>
        </div>
    )
}

export default Navbar