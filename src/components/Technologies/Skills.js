import { DiJavascript, DiPython, DiTerminal } from "react-icons/di";
import { SiCplusplus, SiFirebase, SiGit } from "react-icons/si";


export const Skills = [
  {
    slug: "python",
    Component: DiPython,
    title: "Python",
    Description: () => <>I make small bots, scripts and solve problems with python. </>,
  },
  {
    slug: "javascript",
    Component: DiJavascript,
    title: "JavaScript",
    Description: () => <>Currently learning react and nodejs for web development. </>,
  },
  {
    slug: "c++",
    Component: SiCplusplus,
    title: "C++",
    Description: () => <>Solve algorithmic problmes and also for DSA.</>,
  },
  {
    slug: "terminal",
    Component: DiTerminal,
    title: "Scripting",
    Description: () => <>I have written Shell scripts for various purposes.</>,
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => <>I have used Firebase for auth, database & analytics in my apps.</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Git is a tool that I use frequently. I use GitHub for storing my code.</>,
  },
];
