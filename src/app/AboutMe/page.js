import globalCSS from '../globals.module.css'

export default function() {
    return (
        <div className={globalCSS.content}>
            <p className={globalCSS.title}>About Me</p>
            <p>Hi, my name is J-Zach (pronunced Jay Zack) Loke (rhymes with Coke) and I am an extremely passionate software engineer with a strong
                tenacity for problem solving and enjoy a good challenge.
            </p>
            <br />
            <br />

            <p className={globalCSS.subheading}>Professional</p>
            <p>I have 1 year of experience as software engineer at 777 Partners developing backend services using Java, Spring Boot, Git, Docker,
                Kubernetes, and PostgreSQL. In my time here I have learned a lot and have been the main developer for two projects; building them
                from the ground up, seeing them through to production release, and continuing to support them for post-release development.
            </p>
            <br />

            <p className={globalCSS.subheading}>Work Ethic</p>
            <p>I pride myself in being able to tackle any problem, utilzing the knowledge I already have and supplementing that with my ability
                to seek out information and an arrogance to never give up. What that means in practice is I have strong google-fu skills and
                can more often than not figure out how to tackle an issue autonomously. If I can't google it, I am always willing to leverage the
                knowledge of those around me who are more experienced by asking questions and earnestly trying to understand. I have yet to
                encounter an issue that I could not solve eventually.
            </p>
            <br />
            <p>Above all else, I love to learn in this industry. I am constantly trying to learn new technologies or techniques in order to
                broaden my horizons and improve the quality of my code. If you are reading this as a result of looking at my resume, then this is
                the main reason why I have applied to work at your company; Because I want to challenge myself by putting myself in a new
                environment and learn the different technologies and/or strategies for developing production level code.
            </p>
            <br />
            <p>These two things have allowed me to learn Python, database design, SQL, and Java completely on my own without taking classes or
                receiving training. And now I am taking it upon myself to learn front end concepts by teaching myself JavaScript with React, with
                this website being completely developed and deployed by myself.
            </p>
            <br />

            <p className={globalCSS.subheading}>Personal</p>
            <p>Beyond my professional and academic life in this industry, I love playing games (both video games and board games), am a big foodie,


            </p>
        </div>
    )
}