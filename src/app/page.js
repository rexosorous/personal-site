import globalCSS from './globals.module.css'

export default function Home() {
  return (
    <div className={globalCSS.content}>
      <p className={globalCSS.title}>Welcome!</p>
      <p>Hello and welcome to my website! My name is J-Zach Loke and this is my portfolio site! Here you can found out a little about me,
        what projects I've worked on, see my resume, and check out my social links!
      </p>
      <br />
      <p>While also serving a practical purpose to represent myself professionally, this is also largely a project I built as a way to learn
        JavaScript using React and Next.js and learn all the things it takes to make and deploy a website from start to finish.
      </p>
    </div>
  )
}
