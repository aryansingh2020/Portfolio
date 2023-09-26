document.addEventListener("DOMContentLoaded", () => {
    const navBtn = document.querySelectorAll(".btn");
    const navBtn0 = navBtn[0].textContent;
    const navBtn1 = navBtn[1].textContent;
    const navBtn2 = navBtn[2].textContent;
    const navBtn3 = navBtn[3].textContent;
    const gitHubBtn=document.getElementById("foot1");
    const linkedInBtn=document.getElementById("foot2");
    const hackerRankBtn=document.getElementById("foot3");
    const instaBtn=document.getElementById("foot4");
    const logo=document.getElementById("logo");
    const descriptionHeader = document.getElementById("header2");
    const description = document.getElementById("para2");
    const leftBtn = document.getElementById("left-arrow");
    const rightBtn = document.getElementById("right-arrow");
    const container3=document.getElementById("container3");
    const quotes=[{qt:"Success is not final, failure is not fatal: It is the courage to continue that counts.",pers:"Winston Churchill"},
                  {qt:"The only way to do great work is to love what you do." , pers:"Steve Jobs"},
                  {qt:"Believe you can, and you're halfway there.",pers:"Theodore Roosevelt"},
                  {qt:"Success is not final, failure is not fatal: It is the courage to continue that counts.",pers:" Winston Churchill"},
                  {qt:"Don't watch the clock; do what it does. Keep going.",pers:"Sam Levenson"},
                  {qt:"The only limit to our realization of tomorrow will be our doubts of today.",pers:" Franklin D. Roosevelt"},
                  {qt:"You are never too old to set another goal or to dream a new dream",pers:"C.S. Lewis"}];
    const skillPara = "I have developed strong technical skills, particularly in programming with languages like C++ and Java. I am also proficient in web development, using HTML, CSS, and JavaScript for creating engaging front-end interfaces. Additionally, I have a solid understanding of database management systems, operating systems, and object-oriented programming.Beyond my technical abilities, I have a genuine passion for playing cricket and chess. Cricket allows me to showcase my teamwork and sportsmanship, while chess hones my strategic thinking and problem-solving skills. These interests add a well-rounded dimension to my profile, combining both technical expertise and a love for strategic games.";
    const projectPara = ""
    
    const contents = [{ head: navBtn0, desc: skillPara }, { head: navBtn1, desc: projectPara }];
    let currentPos = 0;
    logo.addEventListener("mouseover",()=>{
        logo.textContent="Aryan Singh";
        logo.style.transition="transform 1s ease-in-out";
        ;
    });
    logo.addEventListener("mouseout",()=>{
        logo.textContent="A.S.";
    })
    navBtn.forEach((button) => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;
            if (buttonText === "Skills") {
                descriptionHeader.textContent = "Skills"
                description.textContent = skillPara;
                navBtn[currentPos].style.color="#ffffff";
                navBtn[currentPos].style.backgroundColor="transparent";
                currentPos = 0;
                navBtn[currentPos].style.color="black";
                navBtn[currentPos].style.backgroundColor="#EBE4D1"
            }
            else if (buttonText === "Projects") {
                descriptionHeader.textContent = "Projects"
                description.textContent = projectPara;      
                navBtn[currentPos].style.color="#ffffff";
                navBtn[currentPos].style.backgroundColor="transparent";
                currentPos = 1;
                navBtn[currentPos].style.color="black";
                navBtn[currentPos].style.backgroundColor="#EBE4D1"
            }
            else if (buttonText === "Contact") {
                window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWsCRjxKdFQtLhcrRNglDwVdlSbLSNPGwpSbBwTXblBxnRCqprksRRpBmXCnjlCsMLMhqrFBB","_blank");
                button.style.color="#ffffff";
                button.style.backgroundColor="transparent";
                button.style.color="black";
                button.style.backgroundColor="#EBE4D1"
            }
            else if (button.textContent = "Resume") {
                window.open("https://drive.google.com/file/d/1X-QdpK0y-uEJsvAxhiThi0eXK7Nt8Kcf/view?usp=sharing","_blank");
                button.style.color="#ffffff";
                button.style.backgroundColor="transparent";
                button.style.color="black";
                button.style.backgroundColor="#EBE4D1";
            }
        })
    });
    leftBtn.addEventListener("click", () => {
        if (currentPos === 0) {
            navBtn[currentPos].style.color="white";
            navBtn[currentPos].style.backgroundColor="transparent";
            currentPos = 1;
            navBtn[currentPos].style.color="black";
            navBtn[currentPos].style.backgroundColor="#EBE4D1"
            descriptionHeader.textContent = contents[currentPos].head;
            description.textContent = contents[currentPos].desc;
        }
        else {
            navBtn[currentPos].style.color="white";
            navBtn[currentPos].style.backgroundColor="transparent";
            currentPos--;
            navBtn[currentPos].style.color="black";
            navBtn[currentPos].style.backgroundColor="#EBE4D1";
            descriptionHeader.textContent = contents[currentPos].head;
            description.textContent = contents[currentPos].desc;
        }

    });
    rightBtn.addEventListener("click", () => {
        if (currentPos === 1) {
            navBtn[currentPos].style.color="white";
            navBtn[currentPos].style.backgroundColor="transparent";
            currentPos = 0;
            navBtn[currentPos].style.color="black";
            navBtn[currentPos].style.backgroundColor="#EBE4D1";
            descriptionHeader.textContent = contents[currentPos].head;
            description.textContent = contents[currentPos].desc;
        }
        else{
            navBtn[currentPos].style.color="white";
            navBtn[currentPos].style.backgroundColor="transparent";
            currentPos++;
            navBtn[currentPos].style.color="black";
            navBtn[currentPos].style.backgroundColor="#EBE4D1";
            descriptionHeader.textContent = contents[currentPos].head;
            description.textContent = contents[currentPos].desc;
        }
    });
    let count=0;
    const quotesDisplayer=()=>{
        if(count===5)
        {
            container3.textContent="\""+quotes[count].qt+"\""+" - "+quotes[count].pers;
            count=0;
        }
        container3.textContent="\""+quotes[count].qt+"\""+" - "+quotes[count].pers;
        count++;
        
    }
    // quotesDisplayer();
    setInterval(quotesDisplayer,6000);
    gitHubBtn.addEventListener("click",()=>{
        window.open("https://github.com/aryansingh2020", '_blank');
    })
    linkedInBtn.addEventListener("click",()=>{
        window.open("www.linkedin.com/in/aryansingh2020", '_blank');
    })
    hackerRankBtn.addEventListener("click",()=>{
        window.open("https://www.hackerrank.com/profile/aryansingh2020", '_blank');
    })
    instaBtn.addEventListener("click",()=>{
        
        window.open("https://www.instagram.com/aar_y_ann/", '_blank');

    })
});