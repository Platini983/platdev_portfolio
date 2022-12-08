import Quiz from "../assets/quiz.png";
import Page from "../assets/intropage.jpg";
import AWS from "../assets/adv.png";
import Todo from "../assets/todolist.png"
import IMG4 from '../assets/portfolio1.jpg'
import IMG5 from '../assets/portfolio2.jpg'

 
const ProjectsData = [
   
  {
    id: "Adventure",
    img: AWS,
    name: "Learning Application",
    live: "https://plat-app.vercel.app/",
    source: "https://github.com/Platini983/plat_app",
  },

  {
    id: "quiz-app",
    img: Quiz,
    name: "Quiz App",
    live: "https://plat-quiz.vercel.app/",
    source: "https://github.com/Platini983/plat_quiz",
  },

  {
    id: "todo",
    img: Todo,
    name: "React Todo App",
    live: "https://plat-todolist.vercel.app/",
    source: "https://github.com/Platini983/plat_todolist",
  },

  {
    id: "dropdown-nav",
    img: Page,
    name: "Homepage with dropdown navigation / Figma to React",
    live: "",
    source: "",
  },
  {
    id: "portfolio1",
    img: IMG4,
    name: "portfolio1 / Figma to React",
    live: "",
    source: "",
  },  
  {
    id: "portfolio2",
    img: IMG5,
    name: "portfolio2 / Figma to React",
    live: "",
    source: "",
  },    
   
];

export default {ProjectsData}